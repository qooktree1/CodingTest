const solution = myString => myString.split('').map(str => {
    console.log(str.isUpperCase)
    if (str === str.toUpperCase()) return str.toLowerCase()
    return str.toUpperCase()
}).join('')