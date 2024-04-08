const solution = (rank, attendance) => {
    const availableRank = rank.map((r, idx) => {
        if (attendance[idx]) return [r, idx]
    }).filter(x => x).sort((a,b) => a[0] - b[0])
    return 10000 * availableRank[0][1] + 100 * availableRank[1][1] + availableRank[2][1]
}