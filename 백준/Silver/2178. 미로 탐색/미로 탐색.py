from  collections import deque
# 상하좌우
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]


def bfs(sx, sy):
    q = deque()
    q.append([sx, sy])
    visited[sx][sy] = 1
    while q:
        x, y = q.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < N and 0 <= ny < M and not visited[nx][ny] and miro[nx][ny]:
                q.append([nx, ny])
                visited[nx][ny] = visited[x][y] + 1


N, M = map(int, input().split())
miro = [list(map(int, input())) for _ in range(N)]
visited = [[0] * M for _ in range(N)]
sx = sy = 0  # 시작점
ex, ey = N-1, M-1  # 도착점

bfs(sx, sy)
print(visited[ex][ey])