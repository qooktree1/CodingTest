const fs = require("fs");
let [N, ...inputData] = fs.readFileSync("/dev/stdin").toString().split("\n");
N = Number(N);
const board = [];
let maxAnswer = 0;

for (let i = 0; i < N; i++) {
  board.push(inputData[i].trim().split(""));
}

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const check = (sx, sy, board, color) => {
  let maxCnt = 1;
  // 가로 check
  let cnt = 1;
  for (let i = sy + 1; i < N; i++) {
    if (board[sx][i] === color) cnt++;
    else break;
  }
  for (let i = sy - 1; i >= 0; i--) {
    if (board[sx][i] === color) cnt++;
    else break;
  }

  maxCnt = Math.max(maxCnt, cnt);
  cnt = 1;

  // 세로 check
  for (let i = sx + 1; i < N; i++) {
    if (board[i][sy] === color) cnt++;
    else break;
  }
  for (let i = sx - 1; i >= 0; i--) {
    if (board[i][sy] === color) cnt++;
    else break;
  }
  maxCnt = Math.max(maxCnt, cnt);

  return maxCnt;
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    for (let d = 0; d < 4; d++) {
      const nx = i + dx[d];
      const ny = j + dy[d];

      if (0 <= nx && nx < N && 0 <= ny && ny < N) {
        [board[i][j], board[nx][ny]] = [board[nx][ny], board[i][j]]; // swap

        const result = check(i, j, board, board[i][j]);
        maxAnswer = Math.max(maxAnswer, result);

        [board[i][j], board[nx][ny]] = [board[nx][ny], board[i][j]]; // swap
      }
    }
  }
}
console.log(maxAnswer);
