"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _http = _interopRequireDefault(require("http"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _url = _interopRequireDefault(require("url"));

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

// C:\Users\Administrator\Desktop\myserver\dist\template.html
// 'C:\Users\Administrator\Desktop\myserver\template.html'
let template = _fs.default.readFileSync(_path.default.resolve(__dirname, "../template.html"), "utf8"); // console.log(template)


class Server {
  constructor(config) {
    this.port = config.port; // 将template属性放到实例上，可以保证属性可以通过this来获取，不被参数覆盖掉

    this.template = template;
  }

  async handleRequest(req, res) {
    let {
      pathname
    } = _url.default.parse(req.url, true); // pathname有可能是中文
    // 编码是浏览器自动编码，解码需要手动解


    pathname = decodeURIComponent(pathname); // 得到一个文件的路径
    // let filePath = path.join(__dirname,pathname) // 
    // console.log(filePath)   // C:\Users\Administrator\Desktop\myserver\dist
    // console.log(process.cwd()) // 获取当前的工作目录  // C:\Users\Administrator\Desktop\myserver

    let filePath = _path.default.join(process.cwd(), pathname);

    try {
      let statObj = await stat(filePath);

      if (statObj.isDirectory()) {
        // 如果是目录，需要把目录下面的文件读出来
        let dirs = await readdir(filePath); // console.log(dirs)  // [ 'a.txt' ]
        // 返回一个网页

        console.log(pathname); // /
        // /dist/

        let templateStr = _ejs.default.render(this.template, {
          dirs,
          path: pathname === "/" ? "" : pathname
        });

        res.setHeader("Content-Type", "text/html;charset=utf-8");
        res.end(templateStr);
      } else {
        // 如果是文件，把文件的内容返回
        this.sendFile(filePath, req, res, statObj);
      }
    } catch (e) {
      this.sendError(e, req, res);
    }
  }

  gzip(filePath, req, res, statObj) {
    let encoding = req.headers["accept-encoding"]; // console.log(encoding)  // gzip, deflate

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

    return false; // console.log(req.headers)
  }

  sendFile(filePath, req, res, statObj) {
    // 在响应数据之前，把数据压缩一把 
    let flag = this.gzip(filePath, req, res, statObj); // 在响应数据之前，设置一个头 

    res.setHeader("Content-Type", _mime.default.getType(filePath) + "; charset=utf8"); // 流  node中非常重要的东西 

    if (!flag) {
      // 客户端不支持压缩 或者 客户端支持的压缩格式在服务器端处理不了
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