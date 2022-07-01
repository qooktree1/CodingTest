import sys
input = sys.stdin.readline

# 상하좌우
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]


def dfs(x, y):
    stack = [[x, y]]
    visited[x][y] = 1
    while stack:
        x, y = stack.pop()
        for d in range(4):
            nx = x + dx[d]
            ny = y + dy[d]
            if 0 <= nx < N and 0 <= ny < N and not visited[nx][ny] and area[nx][ny] > num:
                stack.append([nx, ny])
                visited[nx][ny] = 1


N = int(input())
area = []
max_num = 0
min_num = 101
ans = 0

# 지역 그리기
for _ in range(N):
    area.append(list(map(int, input().split())))

# 가장 (큰 숫자, 작은 숫자) 찾기
for i in range(N):
    for j in range(N):
        max_num = max(max_num, area[i][j])
        min_num = min(min_num, area[i][j])

for num in range(min_num-1, max_num+1):
    visited = [[0] * N for _ in range(N)]
    cnt = 0
    for i in range(N):
        for j in range(N):
            if area[i][j] > num and not visited[i][j]:
                cnt += 1
                dfs(i, j)
    ans = max(ans, cnt)
print(ans)
