//페이지 이동
//페이지를 이동시킬 때 location속성을 사용할 수 있다

//모듈을 추출
var http = require('http');

//웹 서버 생성 및 실행합니다
http.createServer(function(request,response){
    response.writeHead(302, {'Location':'https://www.e-mirim.hs.kr/main.do'});
    response.end();

}).listen(4444, function(){
    console.log('4444번 포트에서 서버 대기 중 입니다.');
})