const VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

const solution = myString => {
    let answer = ""
    for (let i=0; i<myString.length; i++) {
        if (!VOWELS.includes(myString[i])) answer += myString[i]
    }
    return answer
}