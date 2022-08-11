function solution(s) {
    const sArray = s.split(" ")
    for (let i=0; i< sArray.length; ++i) {
        let tmp = sArray[i].split("")
        for (let j=0; j < tmp.length; ++j) {
            if (j % 2 === 0) {
                tmp[j] = tmp[j].toUpperCase()
            } else {
                tmp[j] = tmp[j].toLowerCase()
            }
        }
        sArray[i] = tmp.join("")
    }
    return sArray.join(" ")
}