//콜백 지옥에서 벗어나려면 promises 사용

const fs = require('fs').promises;
console.log('시작');
fs.readFile('./sum.txt')
.then((data)=>{
    console.log('1번',data.toString());
    return fs.readFile('./sum.txt');
})
.then((data)=>{
    console.log('2번',data.toString());
    return fs.readFile('./sum.txt');
})
.then((data)=>{
    console.log('3번',data.toString());
    return fs.readFile('./sum.txt');
})
.catch((err)=>{
    console.error(err);
})