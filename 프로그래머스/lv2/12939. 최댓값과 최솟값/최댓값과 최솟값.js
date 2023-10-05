const solution = s => {
    const numbers = s.split(" ").map(Number)
    
    let maxNum = minNum = numbers.shift()
    for (const num of numbers){
        if (maxNum < num){
            maxNum = num
        }
        if (minNum > num){
            minNum = num
        }
    }
    return [minNum, maxNum].join(" ")
}