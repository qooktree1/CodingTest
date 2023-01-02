from collections import deque
import sys
input = sys.stdin.readline

R, C, N = map(int, input().split())
board = [list(map(str, input())) for _ in range(R)]
bomb = deque([])
moves = [[1, 0], [-1, 0], [0, 1], [0, -1]]
N -= 1  # 1 단계
while N:

    # 폭탄 위치 찾기
    for i in range(R):
        for j in range(C):
            if board[i][j] == "O":
                bomb.append([i, j])

    # 폭탄 설치
    for i in range(R):
        for j in range(C):
            if board[i][j] == ".":
                board[i][j] = "O"

    N -= 1
    if N == 0:
        break

    # 폭탄 폭파
    while bomb:
        x, y = bomb.popleft()
        board[x][y] = "."

        for dx, dy in moves:
            nx, ny = x+dx, y+dy
            if 0 <= nx < R and 0 <= ny < C and board[nx][ny] == "O":
                board[nx][ny] = "."

    N -= 1

for line in board:
    print("".join(line), end="")
