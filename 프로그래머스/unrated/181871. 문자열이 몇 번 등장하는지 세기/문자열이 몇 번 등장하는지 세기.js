function solution(myString, pat) {
    let ans = 0
    
    for (let i=0; i<myString.length - pat.length + 1; i++){
        if (pat === myString.slice(i, i + pat.length)) ans++
    }
    
    return ans
}