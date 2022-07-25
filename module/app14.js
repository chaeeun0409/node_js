//모듈 사용
const {odd, even} = require('./module01');
function check(num) {
    if(num % 2){
        return odd;
    } return even;
}
console.log(check(30))

//module 말고 export 객체로도 모듈을 만들 수 있다

exports.odd="홀수";
exports.even="짝수";

