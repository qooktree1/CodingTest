function solution(arr, intervals) {
    let ans = []
    for (const interval of intervals){
        ans = [...ans, ...arr.slice(interval[0], interval[1]+1)]
    }
    
    return ans
}