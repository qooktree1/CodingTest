from collections import deque
# 상하좌우
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]


def bfs(sx, sy):
    q = deque()
    q.append([sx, sy])
    while q:
        x, y = q.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < M and 0 <= ny < N and not visited[nx][ny] and matrix[nx][ny]:
                visited[nx][ny] = 1
                q.append([nx, ny])


T = int(input())
for _ in range(T):
    M, N, K = map(int, input().split())
    matrix = [[0] * N for _ in range(M)]
    visited = [[0] * N for _ in range(M)]
    cnt = 0
    for _ in range(K):
        x, y = map(int, input().split())
        matrix[x][y] = 1

    for i in range(M):
        for j in range(N):
            if not visited[i][j] and matrix[i][j] == 1:
                bfs(i, j)
                cnt += 1
    print(cnt)