const solution = myString => myString.split('').filter(str => !isNaN(str) && str).map(Number).sort((a,b) => a-b)