R, C, T = map(int, input().split())
room = [list(map(int, input().split())) for _ in range(R)]
aircleaner = []
answer = 0

# 공기 청정기 찾기
for i in range(R):
    if room[i][0] == -1:
        aircleaner.append(i)


def spread_dust():  # 먼지 확산 함수
    dx = [-1, 0, 0, 1]
    dy = [0, -1, 1, 0]

    tmp = [[0] * C for _ in range(R)]  # 확산되는 먼지 배열
    for i in range(R):
        for j in range(C):
            if room[i][j] != 0 and room[i][j] != -1:
                dust = 0  # 확산되는 먼지의 양
                for k in range(4):
                    nx = dx[k] + i
                    ny = dy[k] + j
                    if 0 <= nx < R and 0 <= ny < C and room[nx][ny] != -1:
                        tmp[nx][ny] += room[i][j] // 5  # 확산된 먼지 배열 계산
                        dust += room[i][j] // 5  # 확산된 먼지의 양 더하기
                room[i][j] -= dust  # 원래 먼지의 양에서 확산된 값 빼기

    # 확산된 먼지의 양 계산
    for i in range(R):
        for j in range(C):
            room[i][j] += tmp[i][j]


def remove_dust_up():  # 공기 청정 위쪽
    dx_up = [0, -1, 0, 1]
    dy_up = [1, 0, -1, 0]
    cur_d = 0  # 방향
    tmp_dust = 0  # 이전 먼지 양
    x, y = aircleaner[0], 1  # 공기청정기 앞의 칸
    while 1:
        nx = x + dx_up[cur_d]
        ny = y + dy_up[cur_d]

        # 종료 조건
        if x == aircleaner[0] and y == 0:
            break

        # 방향 바꾸기
        if nx >= R or nx < 0 or ny >= C or ny < 0:
            cur_d += 1
            continue

        room[x][y], tmp_dust = tmp_dust, room[x][y]
        x, y = nx, ny


def remove_dust_down():  # 공기 청정 아래쪽
    dx_down = [0, 1, 0, -1]
    dy_down = [1, 0, -1, 0]
    cur_d = 0  # 방향
    tmp_dust = 0  # 이전 먼지 양
    x, y = aircleaner[1], 1  # 공기청정기 앞의 칸
    while 1:
        # 종료 조건
        if x == aircleaner[1] and y == 0:
            break
        nx = x + dx_down[cur_d]
        ny = y + dy_down[cur_d]

        # 방향 바꾸기
        if nx >= R or nx < 0 or ny >= C or ny < 0:
            cur_d += 1
            continue

        room[x][y], tmp_dust = tmp_dust, room[x][y]  # 먼지 이동
        x, y = nx, ny  # 위치 이동


for i in range(T):
    spread_dust()
    remove_dust_up()
    remove_dust_down()

for i in range(R):
    for j in range(C):
        if room[i][j] > 0:
            answer += room[i][j]

print(answer)
