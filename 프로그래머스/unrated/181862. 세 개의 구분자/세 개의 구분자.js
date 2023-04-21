function solution(myStr) {
    const tmp1 = myStr.split("a").join("b")
    const tmp2 = tmp1.split("b").join("c")
    const tmp3 = tmp2.split("c").filter(x => x)
    if (tmp3.length === 0) return ["EMPTY"]
    return tmp3
}