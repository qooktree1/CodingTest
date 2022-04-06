A, B, C = map(int, input().split())
lst = [0] * 3
lst[0] = A
lst[1] = B
lst[2] = C

# 1번 상황
if A == B == C:
    print(10000 + A * 1000)

else:
    if lst[2] == lst[1]:
        print(1000 + lst[2] * 100)
    elif lst[1] == lst[0]:
        print(1000 + lst[1] * 100)
    elif lst[2] == lst[0]:
        print(1000 + lst[0] * 100)

    else:
        print(max(lst) * 100)