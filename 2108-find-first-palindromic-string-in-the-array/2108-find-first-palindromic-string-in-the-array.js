const isPalindrome = s => s.split("").reverse().join("") === s


const firstPalindrome = words => {
    for (let i=0; i<words.length; i++) {
        if (isPalindrome(words[i])) return words[i]
    }
    return ""
}