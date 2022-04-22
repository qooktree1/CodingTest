import sys
input = sys.stdin.readline
# 상 하 좌 우 좌상 좌하 우상 우하
dx = [-1, 1, 0, 0, -1, 1, -1, 1]
dy = [0, 0, -1, 1, -1, -1, 1, 1]


def dfs(sx, sy):
    stack = []
    stack.append([sx, sy])
    while stack:
        x, y = stack.pop()
        visited[x][y] = 1
        for i in range(8):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < h and 0 <= ny < w and not visited[nx][ny] and matrix[nx][ny]:
                stack.append([nx, ny])


# 1 : 땅, 0 : 바다
while 1:
    w, h = map(int, input().split())

    if w == h == 0:
        break

    matrix = [list(map(int, input().split())) for _ in range(h)]
    visited = [[0] * w for _ in range(h)]
    ans = 0
    for i in range(h):
        for j in range(w):
            if not visited[i][j] and matrix[i][j] == 1:
                dfs(i, j)
                ans += 1
    print(ans)