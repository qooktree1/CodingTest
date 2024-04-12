const runningSum = nums => {
    let numSum = 0
    return nums.map(num =>  numSum += num)
}