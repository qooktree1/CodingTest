let ans = 0
function solution(word) {
    const vowels = ["A", "E", "I", "O", "U"]
    for (let vowel of vowels){
        if (dfs(vowel, word, vowels) === true) return ans
    }
}

function dfs(str, word, vowels){
    ans++
    if (str === word) return true
    
    if (str.length === 5) return false
    
    for (const vowel of vowels){
        if (dfs(str + vowel, word, vowels) === true) return true
    }
    
}