function solution(arr) {
    const ans = []
    
    for (const num of arr){
        for (let i=0; i<num; i++) ans.push(num)
    }
    
    return ans
}