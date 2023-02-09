// 백준 제출 시
let input = require("fs").readFileSync("dev/stdin").toString().split("\n")

// Test
// let input = require("fs").readFileSync("example.txt").toString().split("\n")

const N = Number(input.shift())
const villages = []
for (let i=0; i<N; i++) villages.push(input.shift().trim().split(" ").map(Number))

// 1번째 인덱스 기준 정렬
villages.sort((a,b) => {
    if (a[0] === b[0]) return a[1] - b[1]
    else return a[0] - b[0]
})

let totalNumber = 0  // 총 사람 수
villages.forEach(village =>totalNumber += village[1])
totalNumber = Math.ceil(totalNumber / 2)  // 중간값

let checkNumber = 0

for (const village of villages){
    checkNumber += village[1]
    if (checkNumber >= totalNumber) {
        console.log(village[0])  // 중간값이거나 넘을 경우
        break
    }
}