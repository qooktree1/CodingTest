function solution(my_str, n) {
    const answer = []
    let index = 0
    while (my_str.length >= n){
        answer.push(my_str.slice(0, n))
        my_str = my_str.slice(n)
        index += n
    }
    if (my_str.length > 0) answer.push(my_str)
    return answer
}