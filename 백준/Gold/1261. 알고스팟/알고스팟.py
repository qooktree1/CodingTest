import sys
from collections import deque
# 상하좌우
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]


N, M = map(int, input().split())
lst = [list(map(int, input())) for _ in range(M)]
visited = [[10001] * N for _ in range(M)]
visited[0][0] = 0

q = deque()
q.append([0, 0])

while q:
    x, y = q.popleft()

    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]

        if 0 <= nx < M and 0 <= ny < N:
            # 벽이 아니고 최솟값 갱신 가능하면
            if lst[nx][ny] == 0 and visited[x][y] < visited[nx][ny]:
                visited[nx][ny] = visited[x][y]
                q.append([nx, ny])

            # 벽이고 최솟값 갱신 가능하면
            if lst[nx][ny] == 1 and visited[x][y] + 1 < visited[nx][ny]:
                visited[nx][ny] = visited[x][y] + 1
                q.append([nx, ny])

print(visited[-1][-1])