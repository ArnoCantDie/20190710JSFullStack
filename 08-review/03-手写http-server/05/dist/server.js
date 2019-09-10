"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _http = _interopRequireDefault(require("http"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _url = _interopRequireDefault(require("url"));

var _mime = _interopRequireDefault(require("mime"));

var _chalk = _interopRequireDefault(require("chalk"));

var _ejs = _interopRequireDefault(require("ejs"));

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
    } = _url.default.parse(req.url, true);

    let filePath = _path.default.join(__dirname, pathname);

    try {
      let statObj = await stat(filePath);

      if (statObj.isDirectory()) {
        // 如果是目录，需要把目录下面的文件读出来
        let dirs = await readdir(filePath); // console.log(dirs)  // [ 'a.txt' ]
        // 返回一个网页

        let templateStr = _ejs.default.render(this.template, {
          dirs
        });

        res.end(templateStr);
      } else {
        // 如果是文件，把文件的内容返回
        this.sendFile(filePath, req, res, statObj);
      }
    } catch (e) {
      this.sendError(e, req, res);
    }
  }

  sendFile(filePath, req, res, statObj) {
    // 在响应数据之前，设置一个头 
    res.setHeader("Content-Type", _mime.default.getType(filePath) + "; charset=utf8"); // 流  node中非常重要的东西 

    _fs.default.createReadStream(filePath).pipe(res);
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