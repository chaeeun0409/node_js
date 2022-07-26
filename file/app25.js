const fs = require('fs'); //비동기식 파일 읽기
console.log('시작');
let data = fs.readFileSync('./sum.txt');
console.log('1번',data.toString());
data = fs.readFileSync('./sum.txt');
console.log('2번',data.toString());
data = fs.readFileSync('./sum.txt');
console.log('3번',data.toString());
console.log('끝');
