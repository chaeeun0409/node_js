//서버 생성

//모듈을 추출합니다
var http = require('http');

//서버를 생성하고 실행합니다
http.createServer(function(request,response){
    //변수 선언
    var date = new Date();
    date.setDate(date.getDate()+7);

    //쿠키를 입력합니다
    response.writeHead(200,{
        'Content-Type':'text/html','Set-Cookie':['breakfast = toast','dinner = chicken']
    });
    //쿠키를 출력합니다
    response.end('<h1>'+request.headers.cookie+'</h1>');
}).listen(4444,function(){
    console.log('4444번 포트에서 서버 대기 중입니다.');
})