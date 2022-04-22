dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]


def dfs(x, y):
    stack = [[x, y]]
    while stack:
        x, y = stack.pop()
        visited[x][y] = 1
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < N and 0 <= ny < N and not visited[nx][ny] and area[nx][ny]:
                stack.append([nx, ny])


N = int(input())
area = [list(map(int, input().split())) for _ in range(N)]
max_cnt = 0
for i in range(N):
    for j in range(N):
        if max_cnt < area[i][j]:
            max_cnt = area[i][j]


cnt = 0
max_ans = 0
while cnt != max_cnt:
    visited = [[0] * N for _ in range(N)]
    for i in range(N):
        for j in range(N):
            if area[i][j] <= cnt:
                area[i][j] = 0
    counts = 0
    for p in range(N):
        for q in range(N):
            if not visited[p][q] and area[p][q]:
                dfs(p, q)
                counts += 1
    if max_ans < counts:
        max_ans = counts

    cnt += 1

print(max_ans)