const decompressRLElist = nums => {
    let answer = []
    for (let i=0; i<nums.length - 1; i+=2) {
        answer = [...answer, ...Array.from({length: nums[i]}, () => nums[i+1])]
    }
    return answer
}