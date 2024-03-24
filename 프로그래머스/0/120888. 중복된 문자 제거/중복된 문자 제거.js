const solution = myString => {
    let result = ""
    const stringMap = {}
    const myUniqueString = [...new Set(myString.split(""))]
    for (const c of myUniqueString) stringMap[c] = true
    for (const c of myString) {
        if (stringMap[c]) {
            result += c
            delete stringMap[c]
        }
    }
    return result
}