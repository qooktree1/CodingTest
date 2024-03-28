const findWordsContaining = (words, x) => {
    const answer = []
    const wordsLen = words.length
    for (let i=0; i<wordsLen; i++) {
        if (words[i].includes(x)) answer.push(i)
    }
    return answer
}