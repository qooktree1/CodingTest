# 상하좌우
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]


def dfs(x, y):
    stack = [[x, y]]
    cnt = 1
    while stack:
        x, y = stack.pop()
        visited[x][y] = 1
        for k in range(4):
            nx = x + dx[k]
            ny = y + dy[k]
            if 0 <= nx < n and 0 <= ny < m and not visited[nx][ny] and paper[nx][ny]:
                stack.append([nx, ny])
                paper[nx][ny] = 0
                cnt += 1
    return cnt


n, m = map(int, input().split())
paper = [list(map(int, input().split())) for _ in range(n)]
paint_cnt = 0
visited = [[0] * m for _ in range(n)]
max_ = 0

for i in range(n):
    for j in range(m):
        if not visited[i][j] and paper[i][j]:
            tmp = dfs(i, j)
            if max_ < tmp:
                max_ = tmp
            paint_cnt += 1

print(paint_cnt)  # 그림의 개수
print(max_)