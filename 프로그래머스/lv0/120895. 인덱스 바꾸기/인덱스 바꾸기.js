function solution(my_string, num1, num2) {
    const newString = my_string.split("")
    const tmp = newString[num1]
    newString[num1] = newString[num2]
    newString[num2] = tmp
    return newString.join("")
}