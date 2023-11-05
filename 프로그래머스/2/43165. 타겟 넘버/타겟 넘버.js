let answer = 0

const dfs = (n, ssum, target, numbers) => {
    // 종료 조건
    if (n === numbers.length) {
        if (ssum === target) answer++
        return
    }
    
    dfs(n + 1, ssum + numbers[n], target, numbers)
    dfs(n + 1, ssum - numbers[n], target, numbers)
}


const solution = (numbers, target) => {
    dfs(0, 0, target, numbers)
    return answer
}