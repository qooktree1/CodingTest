function solution(numbers) {
    let ans = []
    for (let i=0; i<numbers.length-1; ++i){
        for (let j=i+1; j<numbers.length; ++j){
            ans.push(numbers[i] + numbers[j])
        }
    }
    const set = new Set(ans)
    const answer = [...set]
    answer.sort(function (a, b) {
        return a-b
    })
    return answer
}