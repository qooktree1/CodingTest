const solution = (arr, divisor) => {
    const newArr = arr.filter(num => num % divisor === 0)
    return newArr.length > 0 ? newArr.sort((a,b) => a-b) : [-1]
}