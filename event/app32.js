//노트 자체에서 비동기 메서드에서 에러처리
// 에러가 발생이 되면 노드 내장 모듈의 에러는 실행중인 프로세스를 멈추지 않는다 (fs는 비동기 이벤트 처리)
//throw를 사용하지 않고 처리한다 (thorw를 쓰면 프로세스가 멈춘다)

const fs = require('fs');

setInterval(() => {
   //nulink() = 파일 삭제
   fs.unlink('./sum.txt',(err)=>{
    if(err){
        console.error(err);
    }
   });
}, 500);