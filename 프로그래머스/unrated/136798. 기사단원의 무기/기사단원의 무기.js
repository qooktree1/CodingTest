function solution(number, limit, power) {
    let answer = 0
    const array = []  // 약수의 개수 배열
    for (let i=1; i<=number; i++){
        let count = 0
        for (let j=1; j<parseInt(i**(1/2))+1; j++){
            if (i % j === 0){
                count++
                if ((j**2) !== i) count++
            }
            if (count > limit){
                answer += power
                break
            }
        }
        if (count <= limit) answer += count
    }
    return answer
}