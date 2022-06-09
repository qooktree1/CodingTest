import sys
input = sys.stdin.readline
from collections import deque
dx = [-1, 1, 0 ,0]
dy = [0, 0, -1, 1]


def bfs(i, j):
    q = deque()
    q.append((i, j))
    cnt = 0
    while q:
        x, y = q.popleft()
        visited[x][y] = 1
        cnt += 1
        for d in range(4):
            nx = x + dx[d]
            ny = y + dy[d]
            if 0 <= nx < N and 0 <= ny < M and not visited[nx][ny] and maps[nx][ny]:
                q.append((nx, ny))
                visited[nx][ny] = 1
    return cnt


N, M, K = map(int, input().split())
maps = [[0] * M for _ in range(N)]
visited = [[0] * M for _ in range(N)]
ans = 0
for _ in range(K):
    r, c = map(int, input().split())
    maps[r-1][c-1] = 1

for i in range(N):
    for j in range(M):
        if not visited[i][j] and maps[i][j]:
            chk = bfs(i, j)
            if ans < chk:
                ans = chk
print(ans)