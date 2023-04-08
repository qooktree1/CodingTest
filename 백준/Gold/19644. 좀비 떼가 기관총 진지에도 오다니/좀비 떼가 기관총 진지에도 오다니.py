import sys
input = sys.stdin.readline
L = int(input())
Ml, Mk = map(int, input().split())
C = int(input())
flag = True
map_lst = [0] * L
bomber_lst = [False] * L
start, end = -Ml + 1, 0
Bomb, shootDam, fullDam = Ml - 1, 0, Mk * Ml

for i in range(L):
    map_lst[end] = int(input().rstrip())

    shootDam = fullDam - Bomb * Mk

    if shootDam < map_lst[end]:
        C -= 1
        if C < 0:
            flag = False
            break
        Bomb += 1
        bomber_lst[end] = True

    if start < 0 or bomber_lst[start]:
        Bomb -= 1
        start += 1
        end += 1

    if end == L:
        break

if flag == True:
    print("YES")
else:
    print("NO")
