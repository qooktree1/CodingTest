const solution = arr => {
    const stk = []
    for (let i=0; i<arr.length; i++) {
        if (stk.length === 0 || stk[stk.length - 1] < arr[i]) stk.push(arr[i])
        else if (stk[stk.length - 1] >= arr[i]) {
            stk.pop()
            i--
        }
    }
    return stk
}