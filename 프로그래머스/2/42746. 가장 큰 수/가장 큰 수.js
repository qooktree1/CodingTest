const solution = numbers => {
    const sortedNumbers = numbers.map(String).sort((a,b) => (b + a) - (a + b)).join("")
    return +sortedNumbers === 0 ? "0" : sortedNumbers
}