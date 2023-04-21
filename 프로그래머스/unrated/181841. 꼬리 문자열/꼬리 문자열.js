function solution(str_list, ex) {
    let ans = ""
    for (const str of str_list){
        if (str.indexOf(ex) === -1) ans += str
    }
    return ans
}