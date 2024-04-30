const minOperations = (nums, k) => {
    nums.sort((a,b) => a-b)
    let answer = 0
    for (let i=0; i<nums.length; i++) {
        if (nums[i] < k) answer++
        else return answer
    }
    return answer
}