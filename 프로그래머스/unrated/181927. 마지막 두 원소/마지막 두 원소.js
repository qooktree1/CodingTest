function solution(nums) {
    return nums[nums.length-1] > nums[nums.length-2] ? [...nums, nums[nums.length-1] - nums[nums.length-2]] : [...nums, nums[nums.length-1] * 2]
}