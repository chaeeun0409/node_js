//파일 읽고, 불러오기

// const fs = require("fs") //파일 열기
// fs.readFile('./app01.js',function (err,data){
//     if(err){
//         throw err;
//     }
//     console.log(data.toString());
// })
const fs = require('fs');
fs.readFile('./app01.js',(err,data) =>{
    if(err){
        throw err;
    }
    console.log(data.toString());
});