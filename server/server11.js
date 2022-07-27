//모듈을 추출합니다
var http = require('http');
var fs = require('fs');
var jade = require('jade');

http.createServer(function(request, response) {
    //JadePage.jade 파일을 읽기
    fs.readFile("Jadepage.jade", "utf8", function(error, data) {
        //jade 모듈을 사용
        var fn = jade.compile(data);

        //추력
        response.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
        response.end(fn());
    });
}).listen(4444,function(){
    console.log('4444번 포트에서 서버 대기 중...');
})