function solution(numbers) {
    const numberObject = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    const answer = []
    let tmp = ""
    for (const number of numbers){
        tmp += number
        if (numberObject.indexOf(tmp) >= 0){
            answer.push(numberObject.indexOf(tmp))
            tmp = ""
        }
    }
    return parseInt(answer.join(""))
}