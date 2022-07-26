const condition = true; //true면 resolve,false면 reject
//const condition = false; //true면 resolve,false면 reject
const promise = new Promise((resolve,rejects)=>{
    if(condition){
        resolve('성공');
    }
    else{
        rejects('실패');
    }
});
promise
.then((message)=>{
    console.log(message);
})
.catch((err)=>{
    console.error(err);
})
.finally(()=>{
    console.log('무조건');
})
