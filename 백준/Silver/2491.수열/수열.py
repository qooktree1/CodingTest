N = int(input())
lst = list(map(int, input().split()))

max_cnt = 0
cnt = 1
i = 0
while i != N - 1:
    if lst[i] <= lst[i + 1]:
        cnt += 1
        i += 1
    else:
        i += 1
        if max_cnt < cnt:
            max_cnt = cnt
        cnt = 1

if max_cnt < cnt:
    max_cnt = cnt
cnt = 1
i = 0
while i != N - 1:
    if lst[i] >= lst[i + 1]:
        cnt += 1
        i += 1
    else:
        i += 1
        if max_cnt < cnt:
            max_cnt = cnt
        cnt = 1
if max_cnt < cnt:
    max_cnt = cnt
print(max_cnt)