var http = require('http');
var fs = require('fs');
var url = require('url');
//서버 설정
http.createServer(function(req,res){
    var pathname = url.parse(req.url).pathname;// url 변수 선언
    if(pathname == '/'){
        fs.readFile('index.html',function(err,data){
            //응답을 합니다
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(data);
        });
    }
    else if(pathname == '/other'){          
        fs.readFile('other.html',function(err,data){
            //응답한다
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(data);
        });
    }
}).listen(4444,function(){
    console.log('4444번 포트에서 서버 대기 중 입니다.');
});