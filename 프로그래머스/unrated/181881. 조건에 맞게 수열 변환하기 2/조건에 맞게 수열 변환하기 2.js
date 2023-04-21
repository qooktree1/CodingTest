function solution(arr) {
    let prev = [...arr]
    let flag = 0
    let ans = 0
    while (true){
        flag = 0
        for (let i=0; i<arr.length; i++){
            if (arr[i] < 50 && arr[i] % 2) arr[i] = arr[i] * 2 + 1
            else if (arr[i] >= 50 && arr[i] % 2 === 0) arr[i] = arr[i] / 2
            else flag++
        }
        if (flag === arr.length) break
        prev = [...arr]
        ans++
    }
    return ans
    
}