function solution(sides) {
    sides.sort((a,b) => a - b)
    if (sides[2] < sides[1] + sides[0]) return 1
    else return 2
}