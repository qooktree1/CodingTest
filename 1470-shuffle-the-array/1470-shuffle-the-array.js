const shuffle = (nums, n) => {
    const numsHalfLen = nums.length / 2
    const answer = []
    for (let i=0; i<numsHalfLen; i++) {
        answer.push(nums[i])
        answer.push(nums[i + numsHalfLen])
    }
    return answer
}