// 문제: 숫자 카드 나누기
// 시간: 47분
// 알고리즘: 내림차순 sort 후 비교


const solution = (arrayA, arrayB) => {
    arrayA.sort((a,b) => b-a)
    arrayB.sort((a,b) => b-a)
    
    let ans1 = 0
    
    const findNum = (cur, check) => {
        for (let i=cur[0]; i>0; i--){
            if (cur.every(x => x % i === 0) && !check.some(x => x % i === 0)) return i
        }
        return 0
    }    
    
    const a = findNum(arrayA, arrayB)
    const b = findNum(arrayB, arrayA)
    return a > b ? a : b
    
}