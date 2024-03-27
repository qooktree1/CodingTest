const solution = nums => {
    const numSet = new Set()
    for (const num of nums) numSet.add(num)
    
    return Math.min(nums.length / 2, numSet.size)
}