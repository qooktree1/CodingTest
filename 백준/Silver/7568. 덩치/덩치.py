N = int(input())
lst = []
for _ in range(N):
    weight, tall = map(int, input().split())
    lst.append([weight, tall, 1])  # 1 : 등수

ans = []

for i in range(N):
    rank = 1
    for j in range(N):
        if lst[i][0] < lst[j][0] and lst[i][1] < lst[j][1]:
            rank += 1
    ans.append(rank)
print(*ans)