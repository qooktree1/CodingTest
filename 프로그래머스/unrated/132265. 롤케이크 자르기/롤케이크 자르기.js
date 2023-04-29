// 문제: 롤케이크 자르기
// 시간: 13분
// 알고리즘: Set이 아닌 Map으로..


const solution = topping => {
    const left = new Map()
    const right = new Map()
    let answer = 0
    
    topping.forEach(topping => {
        if (right.get(topping) === undefined) right.set(topping, 1)
        else right.set(topping, right.get(topping)+1)
    })
    
    for (const t of topping){
        if (left.get(t) === undefined) left.set(t, 1)
        else left.set(t, left.get(t) + 1)
        
        right.set(t, right.get(t) - 1)
        if (right.get(t) === 0) right.delete(t)
        
        if (left.size === right.size) answer++
    }
    
    return answer
}