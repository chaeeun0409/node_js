//render 메서드의 두번 째 매개변수에 전달하고자 하는 변수를 입력하면 데이터 전달 가능

//모듈을 추출합니다
var http = require('http');
var fs = require('fs');
var ejs = require('ejs');


http.createServer(function(request,reponse){
    //ejspage.ejs 파일을 읽습니다
    fs.readFile('ejsPage.ejs','utf-8',function(err,data ){
        reponse.writeHead(200,{'Content-Type':'text/html'});
        reponse.end(ejs.render(data, {
            name : 'funny_node.js',
            description : 'Hello ejs with node.js'
        }));
    });
}).listen(4444,function(){
    console.log('4444 포트 대기중');
})