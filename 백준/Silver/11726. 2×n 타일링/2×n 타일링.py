n = int(input())
dp = [1, 2]
for i in range(2, n):
    dp.append(dp[i-1] + dp[i-2])
if n == 1:
    print(1)
else:
    print(dp[-1] % 10007)