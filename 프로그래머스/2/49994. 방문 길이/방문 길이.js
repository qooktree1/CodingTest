const solution = dirs => {
    const dirTable = {
        "U": [-1, 0],
        "D": [1, 0],
        "L": [0, -1],
        "R": [0, 1]
    }
    const visitedSet = new Set()
    let x = 0, y = 0
    
    for (const dir of dirs) {
        const nextMove = dirTable[dir]
        let nx = x + nextMove[0]
        let ny = y + nextMove[1]
        
        if (-5 <= nx && nx <= 5 && -5 <= ny && ny <= 5) {
            visitedSet.add([x, y, nx, ny].join(""))
            visitedSet.add([nx, ny, x, y].join(""))
            x = nx
            y = ny
        }
    }
    return visitedSet.size / 2
}