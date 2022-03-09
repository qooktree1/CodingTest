def han(a):
    cnt = 0
    for idx in range(1, a + 1):
        if idx <= 99:
            cnt += 1
        else:
            if int(str(idx)[0:1]) - int(str(idx)[1:2]) == int(str(idx)[1:2]) - int(str(idx)[2:3]):
                cnt += 1
    return cnt


N = int(input())
print(han(N))