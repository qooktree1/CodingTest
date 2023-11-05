let answer = 0

const dfs = (n, ssum, target, N, numbers) => {
    // 종료 조건
    if (n === N) {
        if (ssum === target) answer++
        return
    }
    
    dfs(n + 1, ssum + numbers[n], target, N, numbers)
    dfs(n + 1, ssum - numbers[n], target, N, numbers)
}


const solution = (numbers, target) => {
    
    dfs(0, 0, target, numbers.length, numbers)
    return answer
}