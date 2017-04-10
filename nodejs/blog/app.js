var express = require('express');
var app = express();
var request = require('request');
let cheerio = require('cheerio');
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) { 
  request('http://www.jikexueyuan.com/', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      let $ = cheerio.load(body) // $拿到了整个body前端选择器
      // res.send('<a href="https://www.npmjs.com/package/cheerio">爬虫系统</a>'),
      res.json({
        'classnum':$('.jk-vip li').length,
        '工具':'<a href="https://www.npmjs.com/package/cheerio">爬虫系统</a>',
        '协议':'robots.txt'
      });
    }
  })
});
app.listen(3000); 