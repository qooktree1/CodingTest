const leftRightDifference = nums => {
    let leftSum = [0]
    let rightSum = [0]
    
    for (let i=0; i<nums.length - 1; i++) {
        leftSum.push(leftSum[leftSum.length - 1] + nums[i])
        rightSum.push(rightSum[rightSum.length - 1] + nums[nums.length - 1 - i])
    }
    rightSum = rightSum.reverse()
    
    return leftSum.map((_, idx) => Math.abs(leftSum[idx] - rightSum[idx]))
}