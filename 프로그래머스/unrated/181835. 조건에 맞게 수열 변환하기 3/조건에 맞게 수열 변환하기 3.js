function solution(arr, k) {
    const ans = []
    if (k % 2 === 0){
        for (let i=0; i<arr.length; i++){
            ans.push(arr[i] + k)
        }
    } else {
        for (let i=0; i<arr.length; i++){
            ans.push(arr[i] * k)
        }
    }
    
    return ans
}