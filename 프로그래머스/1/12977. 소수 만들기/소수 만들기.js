const isPrimeNumber = (n) => {
    for (let i=2; i<=Math.ceil(n ** (1/2)); i++) {
        if (n % i === 0) return false
    }
    return true
}

const solution = nums => {
    let answer = 0
    for (let i=0; i<nums.length - 2; i++) {
        for (let j=i+1; j<nums.length - 1; j++) {
            for (let k=j+1; k<nums.length; k++) {
                answer += isPrimeNumber(nums[i] + nums[j] + nums[k])
            }
        }
    }
    return answer
}