const solution = chicken => {
    let answer = 0
    while (chicken >= 10) {
        const newChicken = Math.floor(chicken / 10)
        answer += newChicken
        chicken = chicken % 10 + newChicken
    }
    return answer
}