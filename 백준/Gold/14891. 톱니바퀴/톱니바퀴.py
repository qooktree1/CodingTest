from collections import deque


def left(lst):
    lst.rotate(-1)
    return lst


def right(lst):
    lst.rotate(1)
    return lst


gear = [deque(list(map(int, input()))) for _ in range(4)]
# K : 자석 회전시키는 횟수
K = int(input())
for _ in range(K):
    # N : 자석의 번호 | 1, 2, 3, 4
    # D : 회전 방향 | 1:시계, -1:반시계
    N, D = map(int, input().split())
    check = [0] * 4

    # 어떤 톱니바퀴를 돌려야 할지 check
    for i in range(N - 1, 3):
        if abs(gear[i][2] - gear[i + 1][6]) == 1:
            check[i + 1] = 1
        else:
            break
    for i in range(N - 1, 0, -1):
        if abs(gear[i][6] - gear[i - 1][2]) == 1:
            check[i - 1] = 1

    # 현재 톱니바퀴를 돌리기
    if D == 1:
        right(gear[N - 1])
        D = -1
        change_D = D
    elif D == -1:
        left(gear[N - 1])
        D = 1
        change_D = D

    # 톱니바퀴 4번까지 돌리기
    for i in range(N - 1, 3):
        if check[i + 1] == 1:
            if D == 1:
                right(gear[i + 1])
                D = -1
            elif D == -1:
                left(gear[i + 1])
                D = 1
        else:
            break

    D = change_D  # 회전방향을 초기값으로 재설정
    # 톱니바퀴 1번까지 돌리기
    for i in range(N - 1, 0, -1):
        if check[i - 1] == 1:
            if D == 1:
                right(gear[i - 1])
                D = -1
            elif D == -1:
                left(gear[i - 1])
                D = 1
        else:
            break

# 점수 체크
result = 0
j = 1
for i in range(len(gear)):
    if gear[i][0] == 1:
        if j == 1:
            result += 1
        elif j == 2:
            result += 2
        elif j == 4:
            result += 4
        elif j == 8:
            result += 8
    j *= 2
print(result)