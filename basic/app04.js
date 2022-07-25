//시간 측정을 시작합니다.
console.time("mirim");
let output = 0;

for(let i = 0; i<1000; i++){
    output += i;
}
process.exit(); //프로그램 종료
console.log("Result",output);
console.timeEnd("mirim");