//화살표 함수

function add(x,y){
    return x+y;
}
console.log(add(1,1)); //2
const add1 = function(x,y){
    return x+y;
}
console.log(add1(12,1)); //13
const add2 = (x,y) => {
    return x+y;
}
console.log(add2(10,20)); //30
const add3 = (x,y) => x+y;
console.log(add3(1,5)); //6
const add4 = (x,y) => (x+y);
console.log(add4(10,5)); //15