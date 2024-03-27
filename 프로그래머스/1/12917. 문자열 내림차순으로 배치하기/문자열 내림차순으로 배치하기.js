const solution = s => {
    const lowerCase = s.split("").filter(c => c === c.toLowerCase()).sort((a,b) => b.localeCompare(a)).join("")
    const upperCase = s.split("").filter(c => c === c.toUpperCase()).sort((a,b) => b.localeCompare(a)).join("")
    return lowerCase + upperCase
}