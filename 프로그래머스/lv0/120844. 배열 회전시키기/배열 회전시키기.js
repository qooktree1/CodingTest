function solution(numbers, direction) {
    if (direction === "right"){
        const a = numbers.pop()
        numbers.unshift(a)
    } else if (direction === "left"){
        const b = numbers.shift()
        numbers.push(b)
    }
    return numbers
}