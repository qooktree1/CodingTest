// yellow(카펫의 가로 세로 크기를 구하는 문제)

const solution = (brown, yellow) => {
    
    for (let height = 1; height <= yellow; height += 1){
        const width = Number(yellow / height)
        if (brown === width * 2 + height * 2 + 4 && width >= height) return [width + 2, height + 2]
    }
}