/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let answer = []
    const numsLen = nums.length
    for (let i=0; i<numsLen; i++) {
        answer = [...answer.slice(0, index[i]), nums[i], ...answer.slice(index[i])]
    }
    return answer
};
