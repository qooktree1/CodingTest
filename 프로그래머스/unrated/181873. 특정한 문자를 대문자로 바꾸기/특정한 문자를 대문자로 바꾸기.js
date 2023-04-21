function solution(my_string, alp) {
    let ans = ""
    for (const c of my_string){
        if (c === alp) ans += c.toUpperCase()
        else ans += c
    }
    return ans
}