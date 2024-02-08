const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    n = Number(input[0]);
    // 짝수인지 홀수인지 확인하여 결과를 출력
    if (n % 2 === 0) {
        console.log(`${n} is even`);
    } else {
        console.log(`${n} is odd`);
    }
    
});

 
