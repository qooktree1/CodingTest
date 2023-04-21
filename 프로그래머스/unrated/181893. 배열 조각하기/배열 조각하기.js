function solution(arr, query) {
    let [s, e] = [0, arr.length-1]
    for (let i=0; i<query.length; i++){
        if (i % 2) s += query[i]
        else e = s + query[i] - 1
    }
    return s > e ? [-1] : arr.slice(s, e+1)
}