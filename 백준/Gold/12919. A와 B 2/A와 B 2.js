// T에서 문자를 제거하는 방식을 이용
let input = require("fs").readFileSync("dev/stdin").toString().split("\n")
const S = input[0].trim().split("")
const T = input[1].trim().split("")
let answer = 0
const dfs = (t) => {
    if (S.length === t.length){
        if (S.join("") == t.join("")) answer = 1
        return
    }
    if (t[0] === "B"){
        t.reverse()
        t.pop()
        dfs(t)
        t.push("B")
        t.reverse()
    }
    
    if (t[t.length-1] === "A"){
        t.pop()
        dfs(t)
        t.push("A")
    }
}

dfs(T)
console.log(answer)