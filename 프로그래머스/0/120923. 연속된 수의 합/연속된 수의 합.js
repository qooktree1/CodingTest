const continuousSum = n => Array.from({length: n-1}, (_, i) => i+1).reduce((a,b) => a + b, 0)

const solution = (num, total) => {
    const startNum = (total - continuousSum(num)) / num
    return Array.from({length: num}, (_, i) => i + startNum)
}
