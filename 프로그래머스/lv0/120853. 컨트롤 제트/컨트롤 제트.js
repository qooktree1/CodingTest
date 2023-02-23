function solution(s) {
    const numberStack = []
    const newArray = s.split(" ")
    let answer = 0
    for (const check of newArray){
        // 숫자이면
        if (parseInt(check) == check){
            numberStack.push(parseInt(check))
            answer += parseInt(check)
        }
        
        // Z이면
        else if (check === "Z"){
            answer -= numberStack[numberStack.length - 1]
        }
    }
    
    return answer
}