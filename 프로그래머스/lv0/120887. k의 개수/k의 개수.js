function solution(i, j, k) {
    let answer = 0
    for (let index=i; index<=j; index++){
        const tmpArray = String(index).split("")
        for (let x=0; x<tmpArray.length; x++){
            if (tmpArray[x] === String(k)) answer += 1
        }
    }
    
    return answer
}