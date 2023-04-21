function solution(my_strings, parts) {
    let ans = ""
    for (let i=0; i<parts.length; i++){
        ans += my_strings[i].slice(parts[i][0], parts[i][1]+1)
    }
    
    return ans
}