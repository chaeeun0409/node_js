//querystring 모듈 serch 부분을 사용하기 쉽게 변환해서

const url = required('url');
const querystring= required('querystring');
const parsedUrl=url.parse('https://www.e-mirim.hs.kr/main.do');
const query = querystring.parse(parsedUrl.query);
console.log("querystring.parse()",query);
console.log("querystring.stringify()",querystring.stringify(query));
