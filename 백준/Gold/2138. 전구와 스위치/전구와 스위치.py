N = int(input())
origin = list(map(int, input()))
goal = list(map(int, input()))
answer = []


def changePos(n, arr):
    if n > 0:
        arr[n-1] = (arr[n-1]+1) % 2
    arr[n] = (arr[n]+1) % 2
    if n < N-1:
        arr[n+1] = (arr[n+1]+1) % 2


def change(A):
    global answer, clicked
    A2 = A[:]
    cnt = 0
    for i in range(1, N):
        # 이전 전구가 일치하지 않으면
        if (A2[i-1] != goal[i-1]):
            cnt += 1
            changePos(i, A2)
    if A2 == goal and not clicked:
        answer.append(cnt)
    elif A2 == goal and clicked:
        answer.append(cnt+1)


clicked = False
# 첫 번째 전구 스위치 PASS
change(origin)

# 첫 번째 전구 스위치 CLICK
clicked = True
origin[0] = (origin[0]+1) % 2
origin[1] = (origin[1]+1) % 2
change(origin)

if len(answer) == 0:
    print(-1)
else:
    print(min(answer))
