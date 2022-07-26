//이미지 파일
//파일을 제공하는 웹 서버를 만들고 미디어 파일을 출력할 수 있다

//모듈을 추출합니다
var fs = require('fs');
var http = require('http');

//4444번 포트에 서버를 생성하고 실행합니다
http.createServer(function (request,response){
    //  이미지 파일을 읽습니다
    fs.readFile('./roopy.png',function(error,data){
        response.writeHead(200,{'Content-Type':'image/jpeg'});
        response.end(data);
    });
    //오디오 파일을 읽는다
    
}).listen(4444, function(){
    console.log('4444번 포트에서 서버 대기 중입니다...');
})