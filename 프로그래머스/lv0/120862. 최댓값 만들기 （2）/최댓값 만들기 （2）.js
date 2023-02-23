function solution(numbers) {
    numbers.sort((a,b) => a-b)
    if (numbers[numbers.length-1] * numbers[numbers.length-2] > numbers[0] * numbers[1]){
        return numbers[numbers.length-1] * numbers[numbers.length-2]
    } else return numbers[0] * numbers[1]
}