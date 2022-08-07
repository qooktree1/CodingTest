import sys
input = sys.stdin.readline

N = int(input())
dp = [0] * 1000001
dp[0] = 1
dp[1] = 2
dp[2] = 3
for i in range(3, N):
    dp[i] = (dp[i-1] + dp[i-2]) % 15746
print(dp[N-1])
# N:1   1
# N:2   2
# N:3   3
# N:4   5
# N:5   8
# N:6   13