const solution = (lottos, winNums) => {
    const actualWin = lottos.filter(lotto => winNums.includes(lotto)).length  // 확실히 맞는 번호 개수
    const zeroCnt = lottos.filter(lotto => lotto === 0).length  // 0의 개수
    const min = actualWin > 1 ? 7 - actualWin : 6
    const max = actualWin + zeroCnt > 1 ? 7 - (actualWin + zeroCnt) : 6
    return [max, min]
}