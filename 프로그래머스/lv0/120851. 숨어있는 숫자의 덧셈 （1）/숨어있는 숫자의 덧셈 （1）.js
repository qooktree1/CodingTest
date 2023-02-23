function solution(my_string) {
    let ans = 0
    for (let i=0; i<my_string.length; i++){
        if (parseInt(my_string[i]) == my_string[i]) ans += parseInt(my_string[i])
    }
    return ans
}