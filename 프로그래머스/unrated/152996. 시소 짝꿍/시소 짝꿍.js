const solution = weights => {
    weights.sort((a,b) => b-a)
    let ans = 0
    const dict = new Map()
    const pos = [1, 3/2, 2, 4/3]
    for (const weight of weights){
        for (const p of pos){
            if (dict.has(weight*p)) ans += dict.get(weight*p)
        }
        dict.set(weight, (dict.get(weight) || 0) + 1)
    }
    
    return ans
}