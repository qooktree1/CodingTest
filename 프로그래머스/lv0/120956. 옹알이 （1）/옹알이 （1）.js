function solution(babbling) {
    let answer = 0
    babbling.forEach(bab => {
        console.log(bab.split(/aya|ye|woo|ma/g).join(""))
        if (bab.split(/aya|ye|woo|ma/g).join("") === "") answer += 1
    })
    return answer
}