// 백준 제출 시
let input = require("fs").readFileSync("dev/stdin").toString().split("\n")

// Test
// let input = require("fs").readFileSync("example.txt").toString().split("\n")

const N = Number(input.shift())
const K = Number(input.shift())
const sensors = input.shift().split(" ").map(Number)
sensors.sort((a, b) => a-b)  // 오름차순 정렬
const distance = []
for (let i=0; i<N-1; i++){
    distance.push(Math.abs(sensors[i] - sensors[i+1]))
}
distance.sort((a, b) => b-a)  // 내림차순 정렬
const ans = distance.slice(K-1).reduce((pre, cur) => pre + cur, 0)
console.log(ans)