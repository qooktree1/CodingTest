const solution = (myString, indices) => {
    let splittedMyString = myString.split("")
    for (const idx of indices) delete splittedMyString[idx]
    return splittedMyString.join("")
}