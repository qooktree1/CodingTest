const arithmeticTriplets = (nums, diff) => {
    let answer = 0
    for (const num of nums) {
        if (nums.includes(num + diff) && nums.includes(num + diff * 2)) answer++
    }
    return answer
}