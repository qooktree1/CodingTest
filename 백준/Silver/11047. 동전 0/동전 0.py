import sys
input = sys.stdin.readline

N, K = map(int, input().split())
money_list = []
for _ in range(N):
    money_list.append(int(input()))
money_list.sort(reverse=True)
cnt = 0
for money in money_list:
    cnt += K // money
    K = K % money
print(cnt)