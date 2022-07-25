const os = require('os');
console.log("운영체제 정보\n --------------------------------------------------------------");
console.log("os.hostname():",os.hostname());


console.log("경로\n --------------------------------------------------------------");
console.log("os.homedir():",os.homedir());
console.log("os.tmpdir():",os.tmpdir());

console.log("cpu 정보\n --------------------------------------------------------------");
console.log("os.cpus():",os.cpus());
console.log("os.cpus().length:",os.cpus().length);

console.log("메모리 정보\n --------------------------------------------------------------");
console.log("os.freemem():",os.freemem());
console.log("os.totalmem():",os.totalmem());

