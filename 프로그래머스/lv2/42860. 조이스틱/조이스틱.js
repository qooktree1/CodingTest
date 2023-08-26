// Google

const solution = name => {
    let changes = 0  // 바꿀때 사용하는 횟수
    let moves = name.length - 1  // 좌우 이동하는 횟수
    for (let i=0; i<name.length; i++){
        let ascii = name[i].charCodeAt()
        if (name[i] !== "A") changes += Math.min(ascii - 65, 91 - ascii)
        
        // 연속된 A count
        let index = i + 1  // 이동 인덱스
        while (index < name.length && name[index] === "A") index++
        
        // only 좌로, 좌로 갔다가 우로, 처음에 뒷부분부터 시작했다가 다시 앞으로
        moves = Math.min(moves, i * 2 + name.length - index, i + 2 * (name.length - index))
    }

    return changes + moves
}