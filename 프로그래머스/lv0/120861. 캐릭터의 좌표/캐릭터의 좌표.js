function solution(keyinput, board) {
    const answer = [0, 0]
    const N = (board[0]-1) / 2
    const M = (board[1]-1) / 2
    
    for (const key of keyinput){
        if (key === "left" && N >= Math.abs(answer[0]-1)) answer[0] -= 1
        else if (key === "right" && N >= Math.abs(answer[0]+1)) answer[0] += 1
        else if (key === "up" && M >= Math.abs(answer[1]+1)) answer[1] += 1
        else if (key === "down" && M >= Math.abs(answer[1]-1)) answer[1] -= 1
    }
    return answer
}