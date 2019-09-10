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
  stat
} = _fs.default.promises;

class Server {
  constructor(config) {
    this.port = config.port;
  }

  async handleRequest(req, res) {
    let {
      pathname
    } = _url.default.parse(req.url, true);

    let filePath = _path.default.join(__dirname, pathname);

    try {
      let statObj = await stat(filePath);

      if (statObj.isDirectory()) {
        console.log("目录");
      } else {
        console.log("文件");
      }
    } catch (e) {
      this.sendError(e, req, res);
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