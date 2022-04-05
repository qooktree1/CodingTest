from collections import deque
# 상하좌우
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]


def bfs(sx, sy, crash):
    q = deque([[sx, sy, crash]])
    visited[sx][sy][crash] = 1
    while q:
        x, y, crash = q.popleft()
        if x == ex and y == ey:
            return visited[x][y][crash]
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            # 0으로 이동할때
            if 0 <= nx < N and 0 <= ny < M and not visited[nx][ny][crash] and matrix[nx][ny] == 0:
                visited[nx][ny][crash] = visited[x][y][crash] + 1
                q.append([nx, ny, crash])
            # 벽으로 이동할때
            elif 0 <= nx < N and 0 <= ny < M and not visited[nx][ny][crash] and matrix[nx][ny] == 1 and crash == 0:
                # visited 배열에 crash 값을 증가시킴
                visited[nx][ny][crash + 1] = visited[x][y][crash] + 1
                q.append([nx, ny, crash + 1])
    return -1  # 이동 불가시 -1 출력


N, M = map(int, input().split())
matrix = [list(map(int, input())) for _ in range(N)]

# matrix 한 칸 안에 벽을 부순 횟수를 기록할 [0, 0] 만들기
# 초반에 임의의 변수를 사용했지만 BFS 로 접근할때 변수값이 변하지 않아 배열에 저장하는 방식을 씀
visited = [[[0]*2 for _ in range(M)] for _ in range(N)]
sx = sy = 0
ex, ey = N-1, M-1
print(bfs(sx, sy, 0))