const dirMap = {
  left: [-1, 0],
  right: [1, 0],
  up: [0, 1],
  down: [0, -1],
};

const isOnBoard = (x, y, n, m) => {
  const [N, M] = [(n - 1) / 2, (m - 1) / 2];
  if (-N <= x && x <= N && -M <= y && y <= M) return true;
  return false;
};

const solution = (keyInput, board) => {
  let [x, y] = [0, 0];
  for (const key of keyInput) {
    if (isOnBoard(x + dirMap[key][0], y + dirMap[key][1], board[0], board[1])) {
      x += dirMap[key][0];
      y += dirMap[key][1];
    }
  }
  return [x, y];
};
