const NUMBER_ALPHABET_MAP = {
    'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
    'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9'
}

const solution = s => {
    let tmpStr = ''
    let answer = ''
    for (let i=0; i<s.length; i++) {
        if (!isNaN(s[i])) {
            answer += s[i]
        } else {
            tmpStr += s[i]
            if (NUMBER_ALPHABET_MAP[tmpStr]) {
                answer += NUMBER_ALPHABET_MAP[tmpStr]
                tmpStr = ''
            }
        }
    }
    return Number(answer)
}