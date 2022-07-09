from collections import deque

dx = [0, 0, 0, 0, -1, 1]
dy = [-1, 1, 0, 0, 0, 0]
dz = [0, 0, -1, 1, 0, 0]


def bfs(tmp):
    q = deque(tmp)
    while q:
        x, y, z = q.popleft()
        for i in range(6):
            nx = x + dx[i]
            ny = y + dy[i]
            nz = z + dz[i]
            if 0 <= nx < H and 0 <= ny < N and 0 <= nz < M and not box[nx][ny][nz] and not visited[nx][ny][nz]:
                visited[nx][ny][nz] = visited[x][y][z] + 1
                q.append([nx, ny, nz])


def ans():
    answer = 0
    for i in range(H):
        for j in range(N):
            for k in range(M):
                if visited[i][j][k] == 0:
                    return -1
                answer = max(answer, visited[i][j][k])

    # 처음 익은 토마토의 위치를 1로 설정하였기 때문에 -1
    return answer - 1


M, N, H = map(int, input().split())
box = [[list(map(int, input().split())) for _ in range(N)] for _ in range(H)]
has_tomato = []
visited = [[[0] * M for _ in range(N)] for _ in range(H)]
flag = 0
for h in range(H):
    for n in range(N):
         for m in range(M):
            if box[h][n][m] == 1:
                has_tomato.append([h, n, m])  # 토마토 시작점 배열
                visited[h][n][m] = 1  # 방문 표시
            elif box[h][n][m] == -1:
                visited[h][n][m] = -1
            else:
                flag = 1

if flag == 0:
    print(0)
else:
    bfs(has_tomato)
    print(ans())