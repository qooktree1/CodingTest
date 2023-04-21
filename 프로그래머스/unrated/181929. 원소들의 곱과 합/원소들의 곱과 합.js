function solution(nums) {
    return (nums.reduce((a,b) => a+b, 0))**2 > nums.reduce((a,b) => a*b, 1) ? 1 : 0
}