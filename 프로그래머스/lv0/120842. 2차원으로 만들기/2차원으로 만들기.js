function solution(num_list, n) {
    const answer = []
    while (num_list.length > 0){
        const tmp = []
        for (let i=0; i<n; i++){
            tmp.push(num_list.shift())
        }
        answer.push(tmp)
    }
    return answer
}