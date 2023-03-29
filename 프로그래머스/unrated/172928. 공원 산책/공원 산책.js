function solution(park, routes) {
    const [N, M] = [park.length, park[0].length]
    const directions = {
        E: [0, 1], W: [0, -1],
        S: [1, 0], N: [-1, 0]
    }
    let [curX, curY] = [0, 0]
    
    // 시작점 구하기
    for (let i=0; i<park.length; i++){
        for (let j=0; j<park[0].length; j++){
            if (park[i][j] === "S"){
                curX = i
                curY = j
            }
        }
    }
    
    for (const route of routes){
        let [dir, move] = route.split(" ")
        move = parseInt(move)
        let [tmpX, tmpY] = [curX, curY]
        
        while (move > 0){
            tmpX += directions[dir][0]
            tmpY += directions[dir][1]
            
            if (tmpX < 0 || N <= tmpX || tmpY < 0 || M <= tmpY || park[tmpX][tmpY] === "X") break
            move--
        }
        
        if (move === 0){
            curX = tmpX
            curY = tmpY
        }
    }
    return [curX, curY]
}