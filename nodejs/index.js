var express = require('express');
var app = express();
app.get('/aqie',function(req,res){
  res.send('hello aqie');
});
app.listen(3000);