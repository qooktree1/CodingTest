from collections import deque
# 상하좌우
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]


def color_change():
    for p in range(N):
        for q in range(N):
            if lst[p][q] == 'R':
                lst[p][q] = 'G'


def bfs(sx, sy, color):
    q = deque()
    q.append([sx, sy])
    while q:
        x, y = q.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < N and 0 <= ny < N and color == lst[nx][ny] and not visited[nx][ny]:
                visited[nx][ny] = 1
                q.append([nx, ny])


N = int(input())
lst = [list(input()) for _ in range(N)]
visited = [[0] * N for _ in range(N)]
full_color = 0
no_red = 0

for i in range(N):
    for j in range(N):
        if not visited[i][j]:
            bfs(i, j, lst[i][j])
            full_color += 1



visited = [[0] * N for _ in range(N)]
color_change()
for i in range(N):
    for j in range(N):
        if not visited[i][j]:
            bfs(i, j, lst[i][j])
            no_red += 1
print(full_color, no_red)