dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]
[N, C, K] = list(map(int, input().split()))
board = [list(map(str, input())) for _ in range(N)]
sx, sy = N-1, 0  # 시작 지점
ex, ey = 0, C-1  # 도착 지점
visited = [[0] * C for _ in range(N)]
answer = 0


def dfs(x, y, k):
    global answer
    if x == ex and y == ey:
        if K == k:
            answer += 1
        return

    for d in range(4):
        nx = x + dx[d]
        ny = y + dy[d]

        if 0 <= nx < N and 0 <= ny < C and not visited[nx][ny] and board[nx][ny] != "T" and board[nx][ny] == ".":
            visited[nx][ny] = 1
            dfs(nx, ny, k+1)
            visited[nx][ny] = 0


visited[sx][sy] = 1
dfs(sx, sy, 1)
print(answer)
