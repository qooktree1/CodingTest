function solution(my_string) {
    const ans = my_string.split(" ")
    return ans.map(x => {
        if (x !== "") return x
    }).filter(a => a)
}