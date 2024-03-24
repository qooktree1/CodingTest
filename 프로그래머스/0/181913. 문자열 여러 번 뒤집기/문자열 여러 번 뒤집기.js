const solution = (myString, queries) => {
    for (const query of queries) {
        myString = myString.slice(0, query[0]) + myString.slice(query[0], query[1] + 1).split("").reverse().join("") + myString.slice(query[1] + 1)
    }
    return myString
}