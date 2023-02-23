function solution(dots) {
    dots.sort((a,b) => a[1] - b[1])
    return Math.abs(dots[0][0] - dots[1][0]) * Math.abs(dots[0][1] - dots[3][1])
}