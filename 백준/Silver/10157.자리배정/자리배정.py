C, R = map(int, input().split())
K = int(input())
room = [[0] * C for _ in range(R)]
flag = 0

if C * R < K:
    flag = 1
# 상 우 하 좌
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]
move = 0
answer = []
# y 좌표가 다르기 때문에 설정 필요
x = R - 1
y = 0
if flag == 0:
    for i in range(1, C * R + 1):
        room[x][y] = i
        if i == K:
            answer.append(y + 1)
            answer.append(R - x)
        x += dx[move]
        y += dy[move]

        if x < 0 or y < 0 or x >= R or y >= C or room[x][y] != 0:
            x -= dx[move]
            y -= dy[move]

            move = (1 + move) % 4

            x += dx[move]
            y += dy[move]
    print(*answer)
else:
    print(0)