import sys
from collections import deque

# 상하좌우
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

n = int(input())
rooms = [list(map(int, input())) for _ in range(n)]
visited = [[float('inf')] * n for _ in range(n)]
q = deque()
q.append([0, 0])
visited[0][0] = 0

while q:
    x, y = q.popleft()
    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        if 0 <= nx < n and 0 <= ny < n:

            # 길이 있을 경우
            if rooms[nx][ny] == 1:
                cnt = visited[x][y]  # 벽 부신 횟수 증가 X
            
            # 길이 없을 경우
            elif rooms[nx][ny] == 0:
                cnt = visited[x][y] + 1  # 벽 부신 횟수 증가 +1

            # 다익스트라(검은 방의 수가 최소가 될때까지)
            if visited[nx][ny] > cnt:
                visited[nx][ny] = cnt
                q.append([nx, ny])


print(visited[-1][-1])