// 백준 제출 시
let input = require("fs").readFileSync("dev/stdin").toString().split("\n")
// let input = require("fs").readFileSync("example.txt").toString().split("\n")
const N = Number(input[0])
const board = []
const teacher = []
const moves = [[-1, 0], [1, 0], [0, 1], [0, -1]]

let flagAnswer = false

for (let i=1; i <= N; i++){
    board.push(input[i].replace("\r", "").split(" "))
}  // T: 선생, S: 학생, 3개의 장애물 설치하여 감시 피하기

const findTeacher = () => {
    for (let i=0; i < N; i++){
        for (let j=0; j < N; j++){
            if (board[i][j] === "T"){
                teacher.push([i, j])
            }
        }
    }
}

const check = () => {
    
    for (let t of teacher){
        for(let move of moves){
            let [nx, ny] = [t[0]+move[0], t[1]+move[1]]

            // 격자무늬 + 장애물이 없을 경우
            while (0 <= nx && nx < N && 0 <= ny && ny < N && board[nx][ny] !== "O"){
                if (board[nx][ny] === "S") return false  // 선생과 학생이 만나면
                nx += move[0]
                ny += move[1]
            }
        }
    }
    return true
}

const track = (num) => {
    //  종료 조건
    if (num >= 3){
        let result = check()
        if (result) {
            flagAnswer = true
            return
        }
    } else {
        for (let i=0; i < N; i++){
            for (let j=0; j < N; j++){
                if (board[i][j] === "X"){
                    board[i][j] = "O"
                    track(num + 1)
                    board[i][j] = "X"
                }
            }
        }
    }

}


findTeacher()  // 선생 찾기
track(0)

if (flagAnswer){
    console.log("YES")
} else {
    console.log("NO")
}