function solution(my_string, n) {
    let new_string = []
    for (const c of my_string) for (let i=0; i<n; i++) new_string.push(c)
    return new_string.join("")
}