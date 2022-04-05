from collections import deque
# 상하좌우
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]


def bfs(sx, sy, crash):
    q = deque([[sx, sy, crash]])
    visited[sx][sy][crash] = 1
    while q:
        x, y, crash = q.popleft()
        if x == ex and y == ey:
            return visited[x][y][crash]
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < N and 0 <= ny < M and not visited[nx][ny][crash] and matrix[nx][ny] == 0:
                visited[nx][ny][crash] = visited[x][y][crash] + 1
                q.append([nx, ny, crash])
            if 0 <= nx < N and 0 <= ny < M and not visited[nx][ny][crash] and matrix[nx][ny] == 1 and crash == 0:
                visited[nx][ny][crash + 1] = visited[x][y][crash] + 1
                q.append([nx, ny, crash + 1])
    return - 1


N, M = map(int, input().split())
matrix = [list(map(int, input())) for _ in range(N)]
visited = [[[0]*2 for _ in range(M)] for _ in range(N)]
sx = sy = 0
ex, ey = N-1, M-1
print(bfs(sx, sy, 0))