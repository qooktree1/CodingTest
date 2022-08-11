function solution(s) {
    const tmp = s.split("")
    if (tmp[0] == "-") {
        const ttmp = s.substr(1, tmp.length)
        const ans = Number(ttmp) * -1
        console.log(ans)
        return ans
    } else {
        return Number(tmp.join(""))
    }
}