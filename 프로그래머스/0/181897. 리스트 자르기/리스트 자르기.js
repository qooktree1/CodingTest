const solution = (n, slicer, numList) => {
    const [a, b, c] = slicer
    switch (n) {
        case 1: return numList.slice(0, b + 1)
        case 2: return numList.slice(a)
        case 3: return numList.slice(a, b + 1)
        case 4: return numList.slice(a, b + 1).filter((num, idx) => idx % c === 0)
    }
}