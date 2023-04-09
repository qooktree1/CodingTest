function solution(players, callings) {
    const playerMap = new Map()
    const rankMap = new Map()
    for (let i=1; i<=players.length; i++){
        playerMap.set(players[i-1], i)
        rankMap.set(i, players[i-1])
    }
    
    for (const calling of callings){
        
        const firstRank = playerMap.get(calling)
        const secondRank = firstRank-1
        const tmp = rankMap.get(secondRank)
        
        playerMap.set(calling, secondRank)
        playerMap.set(tmp, firstRank)
        
        rankMap.set(firstRank, tmp)
        rankMap.set(secondRank, calling)
    }
    return Array.from(rankMap.values())
}