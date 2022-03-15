from itertools import combinations
from copy import deepcopy


def spread_virus(chk):
    matrix_copy = deepcopy(matrix)
    stack = []  # 바이러스 배열
    visited = []  # 방문했는지 체크하는 배열

    # 상하좌우
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]

    # 벽 세우기
    for i in range(3):
        a, b = chk[i]
        matrix_copy[a][b] = 1
    for i in range(N):
        for j in range(M):
            if matrix_copy[i][j] == 2:
                stack.append([i, j])
    while stack:
        x, y = stack.pop()
        visited.append([x, y])
        for z in range(4):
            nx = x + dx[z]
            ny = y + dy[z]
            if 0 <= nx < N and 0 <= ny < M and matrix_copy[nx][ny] == 0 and [nx, ny] not in visited:
                matrix_copy[nx][ny] = 2
                if (nx, ny) not in visited:
                    stack.append([nx, ny])
    cnt = 0
    for i in range(N):
        for j in range(M):
            if matrix_copy[i][j] == 0:
                cnt += 1
    return cnt


N, M = map(int, input().split())  # N 세로, M 가로
matrix = [list(map(int, input().split())) for _ in range(N)]
zeros = []

# 바이러스의 위치와 0들의 위치 구하기
for i in range(N):
    for j in range(M):
        if matrix[i][j] == 0:
            zeros.append([i, j])

answer = 0
checks = list(combinations(zeros, 3))
for chk in checks:
    answer = max(answer, spread_virus(chk))
print(answer)