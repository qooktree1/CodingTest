const solution = (N, stages) => {
    let denominator = stages.length
    const ans = []
    for (let i=1; i<=N; i++) {
        const numerator = stages.filter(stage => stage === i).length
        ans.push([numerator / denominator, i])
        denominator -= numerator
    }
    return ans.sort((a,b) => b[0] - a[0]).map(arr => arr[1])
}
