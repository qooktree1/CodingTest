// 교점 구하기
const getSpots = line => {
    const arr = []  // 교점들의 배열
    
    for (let i=0; i<line.length-1; i++){
        const [a, b, e] = [line[i][0], line[i][1], line[i][2]]
        
        for (let j=i+1; j<line.length; j++){
            const [c, d, f] = [line[j][0], line[j][1], line[j][2]]
            const [x, y] = [(b*f-e*d)/(a*d-b*c), (e*c-a*f)/(a*d-b*c)]
            
            // 정수 & 분모 !== 0
            if (Number.isInteger(x) && Number.isInteger(y) && a*d !== b*c) arr.push([x, y])
        }
    }
    return arr
}

// 보드 생성
const createBoard = spots => {
    let [minX, minY, maxX, maxY] = [Infinity, Infinity, -Infinity, -Infinity]
    spots.forEach(spot => {
        if (minX > spot[0]) minX = spot[0]
        if (maxX < spot[0]) maxX = spot[0]
        if (minY > spot[1]) minY = spot[1]
        if (maxY < spot[1]) maxY = spot[1]
    })
    let board = Array.from(Array(maxY-minY+1), () => Array(maxX-minX+1).fill("."))
    
    // 별 찍기 - 1사분면 기준으로
    spots.forEach(([x,y]) => {
        board[maxY-y][x-minX] = "*"
    })
    return board
}


const solution = line => {
    const spots = getSpots(line)  // 교점 구하는 함수
    const board =  createBoard(spots)  // 별 보드에 찍는 함수
    return board.map(line => line.join(""))
}