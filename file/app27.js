//readFile의 콜백
const fs = require('fs');
console.log('시작');
fs.readFile('./sum.txt',(err,data)=>{
    if(err){
        throw err;
    }
    console.log('1번',data.toString());
    fs.readFile('./sum.txt',(err,data)=>{
        if(err){
            throw err;
        }
        console.log('2번',data.toString());
        fs.readFile('./sum.txt',(err,data)=>{
            if(err){
                throw err;
            }
            console.log('3번',data.toString());
        console.log('끝');
        });//3번
    });//2번
});//1번