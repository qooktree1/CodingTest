# N : 물품의 수, K : 버틸 수 있는 무게
N, K = map(int, input().split())
dp = [[0] * (K+1) for _ in range(N+1)]
w = []
v = []
for _ in range(N):
    # W : 물건의 무게, V : 물건의 가치
    W, V = map(int, input().split())
    w.append(W)
    v.append(V)

for i in range(1, N+1):
    for j in range(1, K+1):
        if j < w[i-1]:
            dp[i][j] = dp[i-1][j]
        else:
            dp[i][j] = max(dp[i-1][j], dp[i-1][j-w[i-1]] + v[i-1])
print(dp[-1][-1])