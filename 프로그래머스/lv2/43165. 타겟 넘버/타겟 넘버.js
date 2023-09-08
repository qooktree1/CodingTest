const solution = (numbers, target) => {
    let ans = 0
    const N = numbers.length
    
    const dfs = (index, ssum) => {
        if (index === N){
            if (ssum === target) ans++
            return
        }
        
        dfs(index + 1, ssum - numbers[index])
        dfs(index + 1, ssum + numbers[index])
    }
    dfs(0, 0)
    return ans
}