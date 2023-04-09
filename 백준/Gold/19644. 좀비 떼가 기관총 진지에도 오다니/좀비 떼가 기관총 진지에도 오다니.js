const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
const L = Number(input[0]) // 기관총 앞쪽 거리
const [ML, MK] = input[1].split(" ").map(Number) // 기관총의 유효 사거리와 각 1m당 살상력
let Cammo = Number(input[2]) // 지뢰 개수
const zombies = [0]
for (let i=3; i<3+L; i++) zombies.push(Number(input[i]))  // 각 좀비들의 체력
const damageArray = new Array(L+1).fill(0)

let flag = true // 생존 변수

for (let i=1; i<L+1; i++){
    const now = damageArray[i-1] - damageArray[Math.max(0, i-ML)]

    if (zombies[i] <= now + MK) damageArray[i] = damageArray[i-1] + MK
    else {
        if (Cammo){
            Cammo--
            damageArray[i] = damageArray[i-1]
        } else {
            flag = false
            break
        }
    }
}

if (flag) console.log('YES')
else console.log('NO')
