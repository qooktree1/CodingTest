const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let input = []
rl.on('line', function (line) {
    input = Number(line.split(' '))
}).on('close', function () {
    for (let i=1; i<=input; i++){
        const tmp = []
        for (let j=1; j<=i; j++) tmp.push("*")
        console.log(tmp.join(""))
    }
});