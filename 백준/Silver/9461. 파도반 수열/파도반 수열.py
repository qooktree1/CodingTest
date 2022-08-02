import sys
input = sys.stdin.readline

T = int(input())
for _ in range(T):
    N = int(input())
    dp = [0] * 101
    dp[0] = 1
    dp[1] = 1
    dp[2] = 1
    dp[3] = 2
    dp[4] = 2
    dp[5] = 3

    for i in range(5, N):
        dp[i] = dp[i-5] + dp[i-1]
    print(dp[N-1])