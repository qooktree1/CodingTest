import sys
input = sys.stdin.readline

N = int(input())
numbers = list(map(int, input().split()))
dp = [1] * N
for i in range(N):
    for j in range(i):
        # 검사하는 영역 처음부터 비교하며 현재 검사하는 값이
        # 더 크면 max 값 넣기
        if numbers[i] > numbers[j]:
            dp[i] = max(dp[i], dp[j]+1)
print(max(dp))