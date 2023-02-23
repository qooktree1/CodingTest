function solution(my_string) {
    let answer = 0
    let tmp = ""
    for (const str of my_string){
        if (parseInt(str) == str){
            tmp += str
        } else if (parseInt(str) != str && tmp.length > 0){
            answer += parseInt(tmp)
            tmp = ""
        }
    }
    if (tmp.length > 0) answer += parseInt(tmp)
    return answer
}