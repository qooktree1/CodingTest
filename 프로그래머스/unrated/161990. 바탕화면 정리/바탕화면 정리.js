function solution(wallpaper) {
    let [minA, minB, maxC, maxD] = [100, 100, 0, 0]
    for (let i=0; i<wallpaper.length; i++){
        for (let j=0; j<wallpaper[0].length; j++){
            if (wallpaper[i][j] === "#"){
                if (minA > i) minA = i
                if (minB > j) minB = j
                if (maxC < i) maxC = i
                if (maxD < j) maxD = j
                
            }
        }
    }
    return [minA, minB, maxC+1, maxD+1]
}