const fs = require("fs")
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n")
let answer = ""

while (inputData.length > 1) {
    let numbers = inputData.shift().split(" ").map(Number)

    const [N, lottos] = [numbers[0], numbers.slice(1)]

    const dfs = (k, arr) => {
        if (arr.length === 6) {
            answer += arr.join(" ") + "\n"
            return
        }

        for (let i = k; i < N; i++) {
            dfs(i + 1, [...arr, lottos[i]])
        }
    }
    dfs(0, [])
    answer += "\n"
}

console.log(answer)
