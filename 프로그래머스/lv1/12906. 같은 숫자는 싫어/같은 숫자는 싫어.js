const solution = arr => {
    const ans = []
    ans.push(arr[0])
    let compare = arr[0]
    for (let i=1; i<arr.length; i++){
        if (compare !== arr[i]){
            ans.push(arr[i])
            compare = arr[i]
        }
    }
    return ans
}