var express = require('express');
var router = express.Router();

// 访问/  render渲染index   index是模板  { title: 'Express' } 把数据给模板
// 二级路由  /   
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
