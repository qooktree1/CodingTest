const solution = (myString, s, e) => myString.slice(0, s) + myString.slice(s, e + 1).split("").reverse().join("") + myString.slice(e + 1)