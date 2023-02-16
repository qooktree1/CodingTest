const fs = require("fs")
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n")
const N = input.shift()
const ascList = input.shift().trim().split(" ").map(Number).sort((a,b)=>a-b)
const dscList = [...ascList]
dscList.sort((a,b)=>b-a)
const checkList = []
for (let i=0; i< ascList.length; i++){
    checkList.push(ascList[i] + dscList[i])
}
console.log(Math.min(...checkList))