from pprint import pprint
# 상하좌우
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]


def dfs(x, y):
    cnt = 0
    stack = [[x, y]]
    visited[x][y] = 1
    while stack:
        x, y = stack.pop()
        visited[x][y] = 1
        cnt += 1
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < M and 0 <= ny < N and not visited[nx][ny] and not matrix[nx][ny]:
                stack.append([nx, ny])
                matrix[nx][ny] = 1  # 영역 색칠하기
    return cnt


# M : 세로, N : 가로
M, N, K = map(int, input().split())
matrix = [[0] * N for _ in range(M)]
for _ in range(K):
    x1, y1, x2, y2 = map(int, input().split())

    # 색칠하기
    for i in range(y1, y2):
        for j in range(x1, x2):
            matrix[i][j] = 1

area = []
visited = [[0] * N for _ in range(M)]
for i in range(M):
    for j in range(N):
        if not visited[i][j] and not matrix[i][j]:
            area.append(dfs(i, j))
area.sort()
print(len(area))
print(*area)