const solution = dots => {
    const [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots
    if ((x2 - x1) / (y2 - y1)  === (x4 - x3) / (y4 - y3)) return 1
    if ((x3 - x1) / (y3 - y1) === (x4 - x2) / (y4 - y2)) return 1
    
    
    
    return 0
}