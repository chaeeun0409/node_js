var express = require('express');
var http = require('http');
var static=require('serve-static');//경로 static을 위한 미들웨어
var path=require('path');
const bodyParser = require('body-parser');
// 익스프레스 시작
var app = express();


app.set('port', process.env.port || 4444);

//static 미들 웨어 사용
app.use(static(path.join(__dirname,'media')));
//바디파서 미들웨어 시작
//바디파서는 post 방식의 데이터를 주고 받을 수 있다
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    console.log('첫 번째 미들웨어\n');
    //데이터를 주고 받을 수 있게 get,post 방식 사용
    var useAgent = req.header('User-Agent');
    //var paramName = req.query.name;
   // var paramTel = req.query.tel;
    var paramPw = req.body.password;
    var paramId = req.body.id;



    res.send('<h2> 서버에서 응답 User-Agent -> </h2>'+useAgent+'<h2>paramId->'+paramId+'</h2>'
    +'<h2>paramPw->'+paramPw+'</h2>');
    // 다른곳으로 사이트 이동  
    //res.redirect('http://www.google.com');
    req.user = 'chaeeun';
    req.next();
    /*res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    res.end('<h1>서버에서 응답한 결과 : ' + req.user + '</h1>')*/
});

// 두 번째 미들웨어 사용
// app.use(function(req, res, next){
//     console.log('두 번째 미들웨어')
//     //json 형태로 정의
//     var student={name:'홍길동',tel:'010-123-3453'};
//     res.send(student);
//     var studentStr = JSON.stringify(student);
//     res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
//     res.end(studentStr);
// });

var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('익스프레스 웹서버 실행 : ' + app.get('port'));
})