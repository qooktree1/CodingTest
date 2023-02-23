const fs = require("fs")
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n")

const [N, M] = input.shift().trim().split(" ").map(Number)
const bookLocations = input.shift().trim().split(" ").map(Number).sort((a,b)=>a-b)
const plus = []
const minus = []
let answer = 0
let maxLegnthBook = 0

// 음수 양수 위치 나누기
bookLocations.forEach(book => {
    if (book > 0) plus.push(book)
    else minus.push(book)

    maxLegnthBook = Math.max(maxLegnthBook, Math.abs(book))  // 가장 멀리 있는 책은 0으로 돌아올 필요가 없게 만들자
})

plus.sort((a,b)=>b-a)  // 양수는 내림 차순
minus.sort((a,b)=>a-b)  // 음수는 오름차순


// 음수 Check
for (let i=0; i<minus.length; i+=M){

    // 가장 멀리 있는 책은 제외
    if (Math.abs(minus[i]) !== maxLegnthBook) answer += Math.abs(minus[i])
}

// 양수 Check
for (let i=0; i<plus.length; i+=M){

    // 가장 멀리 있는 책 제외
    if (plus[i] !== maxLegnthBook) answer += plus[i]
}

// 최대 거리 + 책들을 돌려놓고 0으로 이동해야 하므로 이동거리 * 2
console.log(answer * 2 + maxLegnthBook)