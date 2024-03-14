const solution = myString => {
    let ans = ""
    for (let i=0; i<myString.length; i++) {
        if (myString[i].charCodeAt() < 'l'.charCodeAt()) ans += 'l'
        else ans += myString[i]
    }
    return ans
}