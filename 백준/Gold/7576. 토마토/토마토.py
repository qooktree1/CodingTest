from collections import deque
# 상하좌우
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]


def bfs(s_p):
    q = deque(s_p)
    while q:
        x, y = q.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < M and 0 <= ny < N and not visited[nx][ny] and arr[nx][ny] == 0:
                visited[nx][ny] = visited[x][y] + 1
                q.append([nx, ny])


# 출발점 찾기(익은 토마토의 위치)
def find_st():
    for p in range(M):
        for q in range(N):
            if arr[p][q] == 1:
                s_p.append([p, q])


def answer():
    max_ = 0
    for i in range(M):
        for j in range(N):
            if visited[i][j] == 0 and arr[i][j] != 1 and arr[i][j] != -1:
                return -1
            if max_ < visited[i][j]:
                max_ = visited[i][j]
    return max_


N, M = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(M)]
visited = [[0] * N for _ in range(M)]
s_p = []
find_st()  # 출발점들의 배열 return

bfs(s_p)
print(answer())