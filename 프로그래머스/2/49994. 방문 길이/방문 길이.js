const solution = dirs => {
    const dirDict = { 'U': [-1, 0], 'D': [1, 0], 'L': [0, -1], 'R': [0, 1]}
    const visited = new Set()
    let [x, y] = [0, 0]
    
    for (let i=0; i<dirs.length; i++) {
        let [nx, ny] = [x + dirDict[dirs[i]][0], y + dirDict[dirs[i]][1]]
        if (-5 <= nx && nx <= 5 && -5 <= ny && ny <= 5) {
            visited.add(String(x) + String(y) + String(nx) + String(ny))
            visited.add(String(nx) + String(ny) + String(x) + String(y))
            x = nx
            y = ny
        }
    }
    return visited.size / 2
}