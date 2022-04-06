from collections import deque
# 상하좌우
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]


def bfs(sx, sy):
    q = deque()
    q.append([sx, sy])
    visited[sx][sy] = 1
    cnt = 1
    while q:
        x, y = q.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < N and 0 <= ny < N and matrix[nx][ny] == 1 and not visited[nx][ny]:
                q.append([nx, ny])
                visited[nx][ny] = 1  # 방문 기록
                cnt += 1  # 방문횟수 증가
    return cnt


# 입력
N = int(input())
matrix = [list(map(int, input())) for _ in range(N)]
visited = [[0] * N for _ in range(N)]
answer = []
for i in range(N):
    for j in range(N):
        if matrix[i][j] and not visited[i][j]:
            answer.append(bfs(i, j))

# 답
K = len(answer)
print(K)
answer.sort()
for i in range(K):
    print(answer[i])

