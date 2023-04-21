function solution(myString) {
    myString = myString.toLowerCase()
    let ans = ""
    
    for (let i=0; i<myString.length; i++){
        if (myString[i] === "a") ans += "A"
        else ans += myString[i]
    }
    return ans
}