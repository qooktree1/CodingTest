const numberToBinary = (num, n) => num.toString(2).padStart(n, '0')

const changeToSecretCode = (code1, code2) => {
    const codeLen = code1.length
    let codeString = ""
    for (let i=0; i<codeLen; i++) {
        if (code1[i] + code2[i] > 0) codeString += "#"
        else codeString += " "
    }
    return codeString
}

const solution = (n, arr1, arr2) => {
    const arrLen = arr1.length
    const answer = []
    for (let i=0; i<arrLen; i++) {
        const [arr1SecretCode, arr2SecretCode] = [numberToBinary(arr1[i], n), numberToBinary(arr2[i], n)]
        answer.push(changeToSecretCode(arr1SecretCode, arr2SecretCode))
    }
    return answer
}