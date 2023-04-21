function solution(arr) {
    const N = Math.max(arr.length, arr[0].length)
    for (let i=0; i<arr.length; i++){
        while (arr[i].length < N){
            arr[i].push(0)
        }
    }
    while (arr.length < N){
        arr.push(Array(N).fill(0))
    }
    return arr
}