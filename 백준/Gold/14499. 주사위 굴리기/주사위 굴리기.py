# N: 지도의 세로 크기
# M: 지도의 가로 크기
# (x, y): 주사위를 놓은 곳의 좌표
# K: 명령의 개수

N, M, x, y, K = map(int, input().split())
board = [list(map(int, input().split())) for _ in range(N)]
orders = list(map(int, input().split()))

# dice = [1, 4, 3, 2, 5, 6]
dice = [0, 0, 0, 0, 0, 0]  # dice[0] = 위, dice[5] = 바닥
dx = [0, 0, 0, -1, 1]
dy = [0, 1, -1, 0, 0]
# 1(동), 2(서), 3(북), 4(남)
for order in orders:
    nx = x + dx[order]
    ny = y + dy[order]

    if 0 <= nx < N and 0 <= ny < M:
        d0, d1, d2, d3, d4, d5 = dice[0], dice[1], dice[2], dice[3], dice[4], dice[5]

        if order == 1:  # 동
            dice[0], dice[1], dice[2], dice[5] = d1, d5, d0, d2
        elif order == 2:  # 서
            dice[0], dice[1], dice[2], dice[5] = d2, d0, d5, d1
        elif order == 3:  # 북
            dice[0], dice[3], dice[4], dice[5] = d4, d0, d5, d3
        elif order == 4:  # 남
            dice[0], dice[3], dice[4], dice[5] = d3, d5, d0, d4

        # 이동한 칸에 쓰여 있는 수가 0이면 바닥 면 복사
        if board[nx][ny] == 0:
            board[nx][ny] = dice[5]

        # 0이 아닌 경우에는 칸에 쓰여 있는 수가 주사위의 바닥면으로 복사 및 칸에 있는 수는 0으로
        else:
            dice[5] = board[nx][ny]
            board[nx][ny] = 0
        x, y = nx, ny
        print(dice[0])
