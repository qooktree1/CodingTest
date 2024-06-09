const solution = wallpaper => {
    let minX = 51, minY = 51, maxX = 0, maxY = 0
    for (let i=0; i<wallpaper.length; i++) {
        for (let j=0; j<wallpaper[0].length; j++) {
            if (wallpaper[i][j] === '#') {
                minX = Math.min(minX, i)
                maxX = Math.max(maxX, i)
                minY = Math.min(minY, j)
                maxY = Math.max(maxY, j)
            }
        }
    }
    return [minX, minY, maxX + 1, maxY + 1]
}