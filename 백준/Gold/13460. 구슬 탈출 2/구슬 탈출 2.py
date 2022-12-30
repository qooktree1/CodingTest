from collections import deque
N, M = map(int, input().split())
board = [list(map(str, input())) for _ in range(N)]


def find():  # 빨간, 파란 공 위치 탐색
    for i in range(N):
        for j in range(M):
            if board[i][j] == "R":
                rx, ry = i, j
            elif board[i][j] == "B":
                bx, by = i, j
    return [rx, ry, bx, by]


def move(x, y, dx, dy):  # 공의 이동
    nx, ny = x, y
    move_count = 0
    while True:
        # 벽에 부딪히지 않고 골인 지점에 들어갈 수 있는 경우
        if board[nx+dx][ny+dy] != "#" and board[nx][ny] != "O":
            nx += dx
            ny += dy
            move_count += 1
        else:
            return [nx, ny, move_count]


def bfs():
    start_rx, start_ry, start_bx, start_by = find()
    visited = [[start_rx, start_ry, start_bx, start_by]]
    q = deque([[start_rx, start_ry, start_bx, start_by, 0]])
    moves = [[0, 1], [-1, 0], [0, -1], [1, 0]]

    while q:
        rx, ry, bx, by, count = q.popleft()

        # 종료 조건
        if count > 10:
            return -1

        for dx, dy in moves:
            nrx, nry, rmove = move(rx, ry, dx, dy)
            nbx, nby, bmove = move(bx, by, dx, dy)

            # 파란 공이 구멍에 빠지지 않고
            if board[nbx][nby] != "O":

                # 공이 겹쳐져 있을 경우 먼거리를 이동한 공이 이전 방향으로 한 칸 이동
                if nrx == nbx and nry == nby:
                    if rmove > bmove:
                        nrx -= dx
                        nry -= dy
                    else:
                        nbx -= dx
                        nby -= dy

                # 빨간공만 들어갈 경우
                if board[nrx][nry] == "O" and count < 10:
                    return count + 1

                # 방문 체크
                if [nrx, nry, nbx, nby] not in visited:
                    visited.append([nrx, nry, nbx, nby])
                    q.append([nrx, nry, nbx, nby, count + 1])

    # 종료 조건
    return -1


print(bfs())
