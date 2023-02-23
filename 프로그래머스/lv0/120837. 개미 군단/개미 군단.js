function solution(hp) {
    let answer = 0
    while (hp > 0){
        if (hp >= 5){
            answer += parseInt(hp / 5)
            hp = hp % 5
        } else if (hp >= 3){
            answer += parseInt(hp / 3)
            hp = hp % 3
        } else if (hp > 0){
            answer += hp
            hp = 0
        }
    }
    return answer
}
