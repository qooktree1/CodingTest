function solution(myString) {
    let ans = ""
    const check = "l".charCodeAt()
    for (let i=0; i<myString.length; i++){
        if (myString[i].charCodeAt() < check) ans += "l"
        else ans += myString[i]
    }
    return ans
}