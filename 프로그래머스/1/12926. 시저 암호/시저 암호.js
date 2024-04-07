const isLowerCase = (c) => /^[a-z]$/.test(c)

const solution = (s, n) => {
    const arr = s.split("")
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === " ") continue
        const cNumber = arr[i].charCodeAt() + n
        
        if (isLowerCase(arr[i])) {
            if (cNumber > 122) arr[i] = String.fromCharCode(cNumber - 26)
            else arr[i] = String.fromCharCode(cNumber)
        } else {
            if (cNumber > 90) arr[i] = String.fromCharCode(cNumber - 26)
            else arr[i] = String.fromCharCode(cNumber)
        }
    }
    return arr.join("")
}