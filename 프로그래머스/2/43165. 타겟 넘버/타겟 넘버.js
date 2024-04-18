const solution = (numbers, target) => {
    let answer = 0
    
    const dfs = (cnt, idx, ssum, target) => {
    if (cnt === numbers.length) {
        if (ssum === target) answer++
        return
    }
        dfs(cnt + 1, idx + 1, ssum + numbers[idx], target)
        dfs(cnt + 1, idx + 1, ssum - numbers[idx], target)
    }

    dfs(0, 0, 0, target)
    return answer
}