const solution = s => {
    const dictionary = {}
    for (const c of s) dictionary[c] = dictionary[c] ? dictionary[c] + 1 : 1
    return Object.entries(dictionary).filter(c => c[1] === 1).map(x => x[0]).sort().join("")
}