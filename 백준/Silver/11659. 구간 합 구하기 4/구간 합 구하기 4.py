import sys
input = sys.stdin.readline
N, M = map(int, input().split())
n = list(map(int, input().split()))
prefix = [0]
cnt = 0
for i in n:
    cnt += i
    prefix.append(cnt)

for i in range(M):
    x, y = map(int, input().split())
    print(prefix[y] - prefix[x-1])