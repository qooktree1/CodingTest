import sys


def check(x, y, N):
    global white, blue
    color = paper[x][y]  # 첫번째 색깔 저장
    for i in range(x, x+N):
        for j in range(y, y+N):
            if color != paper[i][j]:  # 다른 색깔이 나오면 4등분
                check(x, y, N//2)
                check(x+N//2, y, N//2)
                check(x, y+N//2, N//2)
                check(x+N//2, y+N//2, N//2)
                return
    # 색깔
    if color == 0:
        white += 1
    elif color == 1:
        blue += 1



N = int(input())
paper = [list(map(int, input().split())) for _ in range(N)]
white = blue = 0
check(0, 0, N)
print(white)
print(blue)