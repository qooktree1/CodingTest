// 문제: 위장
// 시간: 15분
// 알고리즘: dictionary

const solution = clothes => {
    const dict = {}
    let ans = 1
    for (const cloth of clothes){
        if (dict[cloth[1]] === undefined){
            dict[cloth[1]] = [cloth[0]]
        } else dict[cloth[1]].push(cloth[0])
    }
    const combi = Object.values(dict).map(i => i)
    
    for (let i=0; i<combi.length; i++){
        ans *= (combi[i].length + 1)
    }
    
    
    return ans - 1
}