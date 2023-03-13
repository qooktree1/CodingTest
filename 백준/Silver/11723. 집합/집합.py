import sys
input = sys.stdin.readline
M = int(input())
S = set()
for _ in range(M):
    tmp = input().split()
    if len(tmp) == 1:
        if tmp[0] == "all":
            S = set([i for i in range(1, 21)])
        elif tmp[0] == "empty":
            S = set()
    else:
        move, num = tmp[0], int(tmp[1])
        if move == "add":
            S.add(num)
        elif move == "remove":
            S.discard(num)
        elif move == "check":
            if num in S:
                print(1)
            else:
                print(0)
        elif move == "toggle":
            if num in S:
                S.discard(num)
            else:
                S.add(num)
