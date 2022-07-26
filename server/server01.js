//서버 생성
var server = require('http').createServer();

//서버 객체에 이벤트 연결
server.on('request',function(code){
console.log('request on...');
});
server.on('connection',function(code){
console.log(('connection on...'));
});
//서버 실행
//server.listen(4444);
server.listen(4444,function(){
    console.log('4444 포트에서 대기중...');
});