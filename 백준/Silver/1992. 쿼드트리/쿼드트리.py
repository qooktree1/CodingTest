import sys


def check(x, y, N):
    global answer
    dot = lst[x][0][y]
    for i in range(x, x+N):
        for j in range(y, y+N):
            if dot != lst[i][0][j]:
                answer += "("
                check(x, y, N // 2)
                check(x, y + N // 2, N // 2)
                check(x + N // 2, y, N // 2)
                check(x + N // 2, y + N // 2, N // 2)
                answer += ")"
                return
    if dot == "1":
        answer += "1"
    else:
        answer += "0"


N = int(input())
lst = [list(map(str, input().split())) for _ in range(N)]
answer = ""
check(0, 0, N)
print(answer)