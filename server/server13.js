var express=require('express');
var http = require('http');
var app = express();
app.set('port',process.env.prot||4444);
var server = http.createServer(app).listen(app.get('port'),function(){
    console.log('익스프레스 웹서버 실행'+app.get('port'));
});
