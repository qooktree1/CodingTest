function solution(arr, k) {
    arr = [...new Set(arr)]
    const ans = arr.slice(0, k)
    while (ans.length < k) ans.push(-1)
    return ans
}