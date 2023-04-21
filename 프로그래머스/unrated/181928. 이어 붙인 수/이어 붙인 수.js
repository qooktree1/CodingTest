function solution(nums) {
    let [odd, even] = ["", ""]
    nums.forEach(n => {
        if (n % 2) odd += n
        else even += n
    })
    return Number(odd) + Number(even)
}