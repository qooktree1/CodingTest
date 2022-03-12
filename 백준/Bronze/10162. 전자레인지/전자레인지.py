T = int(input())
lst = [300, 60, 10]
counts = [0] * 3
for i in range(len(lst)):
    # T : 100, lst[i] : 60
    if T >= lst[i]:
        counts[i] = T // lst[i]
        T = T % lst[i]
if T != 0:
    print(-1)
else:
    print(*counts)