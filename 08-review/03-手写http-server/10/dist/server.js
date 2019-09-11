"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _http = _interopRequireDefault(require("http"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _url = _interopRequireDefault(require("url"));

var _crypto = _interopRequireDefault(require("crypto"));

var _zlib = _interopRequireWildcard(require("zlib"));

var _mime = _interopRequireDefault(require("mime"));

var _chalk = _interopRequireDefault(require("chalk"));

var _ejs = _interopRequireDefault(require("ejs"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let {
  readdir,
  stat
} = _fs.default.promises;

let template = _fs.default.readFileSync(_path.default.resolve(__dirname, "../template.html"), "utf8");

class Server {
  constructor(config) {
    this.port = config.port;
    this.template = template;
  }

  async handleRequest(req, res) {
    let {
      pathname
    } = _url.default.parse(req.url, true);

    pathname = decodeURIComponent(pathname);

    let filePath = _path.default.join(process.cwd(), pathname);

    try {
      let statObj = await stat(filePath);

      if (statObj.isDirectory()) {
        let dirs = await readdir(filePath);

        let templateStr = _ejs.default.render(this.template, {
          dirs,
          path: pathname === "/" ? "" : pathname
        });

        res.setHeader("Content-Type", "text/html;charset=utf-8");
        res.end(templateStr);
      } else {
        this.sendFile(filePath, req, res, statObj);
      }
    } catch (e) {
      this.sendError(e, req, res);
    }
  }

  gzip(filePath, req, res, statObj) {
    let encoding = req.headers["accept-encoding"];

    if (encoding) {
      if (encoding.match(/gzip/)) {
        res.setHeader("Content-Encoding", "gzip");
        return _zlib.default.createGzip();
      } else if (encoding.match(/deflate/)) {
        res.setHeader("Content-Encoding", "deflate");
        return _zlib.default.createDeflate();
      }

      return false;
    }

    return false;
  }

  cache(filePath, req, res, statObj) {
    let lastModified = statObj.ctime.toGMTString();
    let ifModifiedSince = req.headers['if-modified-since'];

    let Etag = _crypto.default.createHash("md5").update(_fs.default.readFileSync(filePath)).digest("base64");

    res.setHeader("Last-Modified", lastModified); // Etag是响应头

    res.setHeader("Etag", Etag); // if-none-match 当你修改服务器上的文件时，请求头上面会自动添加这个头
    // console.log(req.headers['if-none-match'],"match")
    // console.log(Etag)
    // if-none-match： NISthsES8P9vzWjdFT/xyg== match
    // console.log(req.headers['if-none-match'])
    // T9hRJPsOY4/I9QhWp+NFlQ==
    // 如果if-none-match存在，说明你改动服务器上的文件中的内容
    // T9hRJPsOY4/I9QhWp+NFlQ==
    // console.log("Etag--->",Etag)
    // console.log("if-none-match--->",req.headers['if-none-match'])

    let ifNoneMatch = req.headers['if-none-match']; // // 根据内容摘要判断是否需要缓存
    // if(ifNoneMatch){
    //     // ifNoneMatch说明修改了内容
    //     // return false;
    //     if(ifNoneMatch !== Etag){
    //         // 修改了内容，并且没恢复，走网络
    //         return false;  // 不走缓存
    //     }else{
    //         // 修改了内容，并且修改完后，把内容恢复，相当于没有修改
    //         return true; // 还是从缓存中取数据
    //     }
    // }else{
    //     // 说明内容没有改变 
    //     return true // 
    // }
    // // 根据修改时间来判断是否缓存
    // if(ifModifiedSince){
    //     if(ifModifiedSince !== lastModified){
    //         // 上一次修改的时间和最新修改的时间不一样
    //         return false //  不走缓存
    //     }
    // }
    // 压缩和缓存是后端程序干的 

    if (ifModifiedSince && ifNoneMatch) {
      if (ifNoneMatch !== Etag && ifModifiedSince !== lastModified) {
        return false;
      }
    } else {
      return false;
    }

    return true;
  }

  sendFile(filePath, req, res, statObj) {
    res.setHeader("Cache-Control", "no-cache");
    let cache = this.cache(filePath, req, res, statObj);

    if (cache) {
      res.statusCode = 304;
      return res.end();
    }

    let flag = this.gzip(filePath, req, res, statObj);
    let type = _mime.default.getType(filePath) || "text/plain";
    res.setHeader("Content-Type", type + "; charset=utf8");

    if (!flag) {
      _fs.default.createReadStream(filePath).pipe(res);
    } else {
      _fs.default.createReadStream(filePath).pipe(flag).pipe(res);
    }
  }

  sendError(e, req, res) {
    res.statusCode = 404;
    res.end("Not Found~~~");
  }

  start() {
    // 127.0.0.1 
    let server = _http.default.createServer(this.handleRequest.bind(this));

    server.listen(this.port, () => {
      console.log(`${_chalk.default.yellow('Starting up http-server, serving ')} ${_chalk.default.blue('./')}
${_chalk.default.yellow(' Available on:')}
${_chalk.default.green('http://127.0.0.1:')} ${_chalk.default.green(this.port)}
Hit CTRL-C to stop the server
            `);
    });
  }

}

var _default = Server;
exports.default = _default;