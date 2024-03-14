const solution = (myString, num1, num2) => {
    const a = myString[num1]
    const b = myString[num2]
    const myStringArr = myString.split("")
    myStringArr[num1] = b
    myStringArr[num2] = a
    return myStringArr.join('')
}