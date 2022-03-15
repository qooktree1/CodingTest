# N : 격자의 크기
N = int(input())
sands = []
for i in range(N):
    sands.append(list(map(int, input().split())))
x = y = N // 2  # 초기 위치
sand_off = 0  # 격자 밖으로 나간 모래의 양

# 2, 10, 7, 1, 5, 10, 7, 1, 2, 'a'
left = [[-2, 0], [-1, -1], [-1, 0], [-1, 1], [0, -2], [1, -1], [1, 0], [1, 1], [2, 0], [0, -1]]
bottom = [[0, -2], [1, -1], [0, -1], [-1, -1], [2, 0], [1, 1], [0, 1], [-1, 1], [0, 2], [1, 0]]
right = [[-2, 0], [-1, 1], [-1, 0], [-1, -1], [0, 2], [1, 1], [1, 0], [1, -1], [2, 0], [0, 1]]
top = [[0, -2], [-1, -1], [0, -1], [1, -1], [-2, 0], [-1, 1], [0, 1], [1, 1], [0, 2], [-1, 0]]

wind = [0.02, 0.1, 0.07, 0.01, 0.05, 0.1, 0.07, 0.01, 0.02, 0]
k = 1
flag = 0
while True:
    # 좌로 이동
    for _ in range(k):
        y -= 1
        if y == -1:  # 종료조건
            flag = 1
            break
        total_sand = 0
        for i in range(10):
            nx = x + left[i][0]
            ny = y + left[i][1]
            if i == 9:
                sand_moved = sands[x][y] - total_sand
            else:
                sand_moved = int(sands[x][y] * wind[i])
                total_sand += sand_moved

            if 0 <= nx < N and 0 <= ny < N:
                sands[nx][ny] += sand_moved
            else:
                sand_off += sand_moved
    if flag == 1:
        break
    # 아래로 이동
    for _ in range(k):
        x += 1
        total_sand = 0
        for i in range(10):
            nx = x + bottom[i][0]
            ny = y + bottom[i][1]
            if i == 9:
                sand_moved = sands[x][y] - total_sand
            else:
                sand_moved = int(sands[x][y] * wind[i])
                total_sand += sand_moved

            if 0 <= nx < N and 0 <= ny < N:
                sands[nx][ny] += sand_moved
            else:
                sand_off += sand_moved

    k += 1
    # 우로 이동
    for _ in range(k):
        y += 1
        total_sand = 0
        for i in range(10):
            nx = x + right[i][0]
            ny = y + right[i][1]
            if i == 9:
                sand_moved = sands[x][y] - total_sand
            else:
                sand_moved = int(sands[x][y] * wind[i])
                total_sand += sand_moved

            if 0 <= nx < N and 0 <= ny < N:
                sands[nx][ny] += sand_moved
            else:
                sand_off += sand_moved

    # 위로 이동
    for _ in range(k):
        x -= 1
        total_sand = 0
        for i in range(10):
            nx = x + top[i][0]
            ny = y + top[i][1]
            if i == 9:
                sand_moved = sands[x][y] - total_sand
            else:
                sand_moved = int(sands[x][y] * wind[i])
                total_sand += sand_moved

            if 0 <= nx < N and 0 <= ny < N:
                sands[nx][ny] += sand_moved
            else:
                sand_off += sand_moved
    k += 1

print(sand_off)