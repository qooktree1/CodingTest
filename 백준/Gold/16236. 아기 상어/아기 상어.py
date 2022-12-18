import sys
from collections import deque

input = sys.stdin.readline
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

N = int(input())  # 공간의 크기
ocean = [list(map(int, input().split())) for _ in range(N)]

shark_x, shark_y, shark_weight = 0, 0, 2  # 초기 상어 위치 초기화 변수, 상어 크기

# 초기 상어 위치
for i in range(N):
    for j in range(N):
        if ocean[i][j] == 9:
            ocean[i][j] = 0
            shark_x, shark_y = i, j
            break


def bfs(x, y, size):
    distance = [[0] * N for _ in range(N)]  # 거리 표시
    visited = [[0] * N for _ in range(N)]  # 방문 표시
    fish_table = []

    q = deque()
    q.append([x, y])
    visited[x][y] = 1

    while q:
        x, y = q.popleft()
        for i in range(4):
            nx, ny = x + dx[i], y + dy[i]
            if 0 <= nx < N and 0 <= ny < N and not visited[nx][ny] and ocean[nx][ny] <= shark_weight:
                q.append([nx, ny])
                visited[nx][ny] = 1
                distance[nx][ny] = distance[x][y] + 1

                if 0 < ocean[nx][ny] < shark_weight:
                    fish_table.append([distance[nx][ny], nx, ny])

    # 가장 거리가 짧은 곳부터 방문,
    return deque(sorted(fish_table, key=lambda x: (x[0], x[1], x[2])))


time = 0  # 몇초? == answer
eat = 0  # 먹은 횟수 count

while True:
    bfs_result = bfs(shark_x, shark_y, shark_weight)

    # 먹을 수 있는 물고기가 없는 경우
    if (len(bfs_result)) == 0:
        break

    tmp_time, nx, ny = bfs_result.popleft()
    ocean[nx][ny] = 0  # 상어의 좌표 이동
    time += tmp_time
    eat += 1  # 상어가 먹은 물고기 증가

    if eat == shark_weight:
        shark_weight += 1
        eat = 0

    shark_x, shark_y = nx, ny  # 상어의 좌표를 변경
print(time)
