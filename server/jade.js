//모듈을 추출합니다
var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

//서버를 생성하고 실행
http.createServer(function(request,reponse){
    //ejspage.ejs 파일을 읽습니다
    fs.readFile('Jadepage.jade','utf-8',function(err,data ){
        //jade 모듈을 사용
        var fn = jade.compil(data);

        //출력
        reponse.writeHead(200,{'Content-Type':'text/html'});
        reponse.end(fn());
    });
}).listen(4444,function(){
    console.log('4444 포트 대기중');
})