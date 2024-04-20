const solution = (numList, n) => numList.sort((a, b) => {
        const [aDist, bDist] = [Math.abs(n - a), Math.abs(n - b)]
        if (aDist === bDist) return b - a
        return aDist - bDist
})