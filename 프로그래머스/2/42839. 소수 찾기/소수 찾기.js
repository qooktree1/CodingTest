const answer = new Set()

// 소수 판별 함수
const isPrimeNumber = num => {
    if (num <= 1) return false
    for (let i=2; i<=num**0.5; i++) {
        if (num % i === 0) return false
    }
    return true
}

const dfs = (arr, numbers, visited) => {
    answer.add(+arr.join(""))
    if (arr.length === numbers.length) return    
    for (let i=0; i<numbers.length; i++) {
        if (!visited[i]) {
            visited[i] = true
            dfs([...arr, numbers[i]], numbers, visited)
            visited[i] = false
        }
    }
}

const solution = numbers => {
    const visited = new Array(numbers.length).fill(false)
    dfs([], numbers, visited)
    return [...answer].filter(num => isPrimeNumber(num)).length
}