function solution(rsp) {
    const tornament = rsp.split("")
    let answer = ""
    tornament.map(hand => {
        if (hand === "2") answer += "0"
        else if (hand === "5") answer += "2"
        else if (hand === "0") answer += "5"
    })
    return answer
    
}