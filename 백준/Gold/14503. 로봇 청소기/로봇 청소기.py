def clean(x, y, d):
    while True:
        for i in range(4):
            nx = x + dx[(3 + d - i) % 4]
            ny = y + dy[(3 + d - i) % 4]
            if matrix[nx][ny] == 0:
                x, y = nx, ny
                d = (d + 3 - i) % 4
                matrix[x][y] = 2
                return clean(x, y, d)
        else:
            # 뒤로 이동
            nx = x + dx[(d + 2) % 4]
            ny = y + dy[(d + 2) % 4]
            # 뒤가 벽이면
            if matrix[nx][ny] == 1:
                break
            else:
                x, y = nx, ny


N, M = map(int, input().split())  # N : 가로 | M : 세로
x, y, d = map(int, input().split())  # (x,y) 좌표 | d : 방향
# d -> 0:북 | 1:동 | 2:남 | 3:서
# 북동남서
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]
# 왼쪽 바라볼때 북 -> 서 -> 남 -> 동 -> 북
# 0 : 빈칸 | 1 : 벽
matrix = [list(map(int, input().split())) for _ in range(N)]
answer = 0

matrix[x][y] = 2  # 처음 칸 칠하기
clean(x, y, d)


# 2의 개수 세기(로봇이 지나간 자리)
for i in range(N):
    for j in range(M):
        if matrix[i][j] == 2:
            answer += 1
print(answer)