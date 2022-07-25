exports.Circle = function(num){
    return num*num*Math.PI;
}

Circle = function(num){
    return num*num*Math.PI;
}
//절대값을 구한다
exports.abs=function(num){
    if(num>0)
    return num;
    else return -num;
}
abs = function(num){
    if(num>0){
        return num;
    }
}

module.exports = {abs,Circle};