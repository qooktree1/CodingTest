import sys
input = sys.stdin.readline
N, M = map(int, input().split())
a = list(map(int, input().split()))
b = list(map(int, input().split()))
answer = a + b
answer.sort()
print(*answer)