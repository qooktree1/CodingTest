const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    let str = input[0];
    const answer = str.split('').map(c => {
        if (c === c.toUpperCase()) return c.toLowerCase()
        return c.toUpperCase()
    }).join('')
    console.log(answer)
});