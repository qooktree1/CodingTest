const finalValueAfterOperations = operations => {
    let answer = 0
    
    for (const op of operations) {
        if (op === "X++") answer++
        else if (op === "++X") ++answer
        else if (op === "X--") answer--
        else if (op === "--X") --answer
    }
    return answer
}