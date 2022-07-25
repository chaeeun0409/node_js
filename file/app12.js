//비동기식 이벤트 처리 방식

/*function run(){
    console.log("3초후 실행");
}
console.log("시작");
setTimeout(run,3000);
console.log("끝"); */

//동기식 방식 = 에러발생
const fs = require("fs");
fs.readFile('./app01.js','utf-8');
console.log("파일 불러오기 완료");