const numberGame = nums => {
    nums.sort((a,b) => a-b)
    
    for (let i=0; i<nums.length - 1; i+=2) {
        const tmp = nums[i]
        nums[i] = nums[i + 1]
        nums[i + 1] = tmp
    }
    return nums
}