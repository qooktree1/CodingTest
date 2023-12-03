const solution = dirs => {
    let visited = new Set()
    const d = {
        "U": [0, 1],
        "D": [0, -1],
        "R": [1, 0],
        "L": [-1, 0]
    }
    let now = [0, 0]
    
    for (const dir of dirs){
        let [nx, ny] = [now[0] + d[dir][0], now[1] + d[dir][1]]
        
        if (nx > 5 || nx < -5 || ny > 5 || ny < -5) continue
        
        visited.add("" + now[0] + now[1] + nx + ny)
        visited.add("" + nx + ny + now[0] + now[1])
        now = [nx, ny]
        
    }
    return visited.size / 2
}