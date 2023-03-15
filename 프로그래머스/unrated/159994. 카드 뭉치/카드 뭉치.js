function solution(cards1, cards2, goal) {
    const c1 = cards1
    const c2 = cards2
    for (let g of goal){
        if (c1.indexOf(g) === 0) c1.shift()
        else if (c2.indexOf(g) === 0) c2.shift()
        else return "No"
    }
    return "Yes"
}