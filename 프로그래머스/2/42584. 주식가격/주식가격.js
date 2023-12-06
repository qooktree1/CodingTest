const solution = prices => {
    const answer = []
    for (let i=0; i<prices.length - 1; i++) {
        let cnt = 0
        for (let j=i; j<prices.length - 1; j++) {
            
            if (prices[i] <= prices[j]) cnt++
            else break
        }
        answer.push(cnt)
    }
    return [...answer, 0]
}