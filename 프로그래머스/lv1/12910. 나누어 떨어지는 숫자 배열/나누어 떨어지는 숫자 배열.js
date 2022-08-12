function solution(arr, divisor) {
    ans = []
    for (let i=0; i<arr.length; ++i) {
        if (arr[i] % divisor === 0) {
            ans.push(arr[i])
        }
    }
    if (ans.length === 0) { return [-1]}
    else {
        
        ans.sort(function(a, b)  {
            return a - b;
        })
     return ans
    }
}