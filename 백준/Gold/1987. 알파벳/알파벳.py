import sys
input = sys.stdin.readline

# 상하좌우
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

def dfs(x, y, cnt):
    global max_distance
    max_distance = max(max_distance, cnt)
    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        if 0 <= nx < R and 0 <= ny < C and not visited[ord(board[nx][ny]) - 65]:
            visited[ord(board[nx][ny]) - 65] = 1
            dfs(nx, ny, cnt + 1)
            visited[ord(board[nx][ny]) - 65] = 0


R, C = map(int, input().split())
board = [list(map(str, input())) for _ in range(R)]
max_distance = 1
visited = [0] * 26
visited[ord(board[0][0]) - 65] = 1
dfs(0, 0, 1)
print(max_distance)