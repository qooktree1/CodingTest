function solution(n) {
    const answer = []
    let index = 2
    while (n !== 1){
        if (n % index == 0){
            answer.push(index)
            n /= index
        }
        else index += 1
    }
    return [...new Set(answer)].sort((a,b) => a-b)
}