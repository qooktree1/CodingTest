const solution = word => {
    const vowels = ["A", "E", "I", "O", "U"]
    let answer = 0
    let madeWord = ""
    while (madeWord !== word) {
        if (madeWord.length < 5) madeWord += vowels[0]
        else {
            const lastVowel = madeWord[madeWord.length - 1]
            if (lastVowel !== "U") {
                madeWord = madeWord.slice(0, madeWord.length - 1) + vowels[vowels.indexOf(lastVowel) + 1]
            } else {
                for (let i=madeWord.length - 1; i > -1; i--) {
                    if (madeWord[i] === "U") madeWord[i] = madeWord.slice(0, madeWord.length - 2)
                    if (madeWord[i] !== "U") {
                        madeWord = madeWord.slice(0, i) + vowels[vowels.indexOf(madeWord[i]) + 1]
                        break
                    }
                }
            }
        }
        answer++
    }
    return answer
}


// let answer = 0

// const dfs = (word, answerWord, vowels) => {
//     answer++
//     if (word === answerWord) return true
//     if (word.length === 5) return false
//     for (const vowel of vowels) {
//         if (dfs(word + vowel, answerWord, vowels)) return true
//     }
// }


// const solution = word => {
//     const vowels = ["A", "E", "I", "O", "U"]
//     for (const vowel of vowels) {
//         if (dfs(vowel, word, vowels)) return answer
//     }
// }