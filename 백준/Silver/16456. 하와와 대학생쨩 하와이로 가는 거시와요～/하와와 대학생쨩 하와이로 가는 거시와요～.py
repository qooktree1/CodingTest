import sys

n = int(input())
# 어떤섬 -> 다음섬
# 어떤섬 한칸 건너뛰고 다음 섬
# 어떤섬 -> 이전 섬
# 첫번째 섬에서 시작해야 함
# 모든 섬을 탐색
dp = [0] * 50001
dp[0] = 1
dp[1] = 1
dp[2] = 2
dp[3] = 2

# dp[n] = dp[n-1] + dp[n-3]

for i in range(3, n):
    dp[i] = (dp[i-1] + dp[i-3]) % 1000000009

print(dp[n-1])