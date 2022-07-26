setInterval (()=>{
    console.log('시작');
    try{
        throw new Error('무한 출력');
        //에러 강제 발생
    }
    catch(err)
    {
        console.error(err);
    }
},500);