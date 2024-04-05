const solution = dots => {
    let width, height
    for (let i=1; i<dots.length; i++) {
        if (dots[0][0] !== dots[i][0]) width = Math.abs(dots[0][0] - dots[i][0])
        if (dots[0][1] !== dots[i][1]) height = Math.abs(dots[0][1] - dots[i][1])
    }
    return width * height
}