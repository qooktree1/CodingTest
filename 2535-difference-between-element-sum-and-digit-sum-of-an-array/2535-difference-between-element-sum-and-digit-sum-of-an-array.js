const differenceOfSum = nums => {
    const elementSum = nums.reduce((a,b) => a + b, 0)
    const digitSum = nums.join('').split('').reduce((a,b) => a + +b, 0)
    return Math.abs(elementSum - digitSum)
}