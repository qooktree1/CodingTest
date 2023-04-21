function solution(my_string, m, c) {
    const arr = []
    let ans = ""
    for (let i=0; i<my_string.length; i+=m){
        arr.push(my_string.slice(i, i+m+1).split(""))
    }
    for (let i=0; i<arr.length; i++) ans += arr[i][c-1]
    
    return ans
}