//비동기식 이벤트 처리 방식

function run(){
    console.log("3초후 실행");
}
console.log("시작");
setTimeout(run,3000);
console.log("끝"); 

//동기식 방식 = 에러발생
const fs = require("fs");
fs.readFile('./app01.js','utf-8');
console.log("파일 불러오기 완료");

//파일 입출력은 비동기식 방식으로 읽습니다
//출력함수를 이용한 비동기식 이벤트 처리 방식
const fs=require("fs");
fs.readFile('./app01.js','utf-8',(err,data)=>{
    console.log(data.toString());
    console.log("파일 오픈");
});
console.log("다른작업중");