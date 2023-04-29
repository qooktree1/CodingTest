function solution(sequence, k) {
    let [s, e] = [0, 0]
    let ssum = sequence[0]
    const ans = []
    const S = sequence.length
    while (true){
        
        if (ssum < k) ssum += sequence[++e]
        else if (ssum > k) ssum -= sequence[s++]
        else {
            ans.push([s, e])
            if (s < e) ssum -= sequence[s++]
            else ssum += sequence[++e]
            
        }
        if (s > S-1 || e > S-1) break
    }
    ans.sort((a,b) => a[0] - b[0])
    let minLength = ans[0][1] - ans[0][0]
    let answer = []
    for (let i=0; i<ans.length; i++){
        if (minLength > ans[i][1] - ans[i][0]){
            answer = [ans[i][0], ans[i][1]]
            minLength = ans[i][1] - ans[i][0]
        }
    }
    return answer.length > 0 ? answer : ans[0]
}