const solution = myString => {
    let answer = 0
    let tmp = ""
    for (let i=0; i<myString.length; i++) {
        if (!isNaN(myString[i])) {  // 숫자일 경우
            tmp += myString[i]
        } else {  // 문자일 경우
            answer += Number(tmp)
            tmp = ""
        }
    }
    return answer + Number(tmp)
}