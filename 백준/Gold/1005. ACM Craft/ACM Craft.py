import sys
from collections import deque
input = sys.stdin.readline

T = int(input())
for _ in range(T):
    N, K = map(int, input().split())
    d = [0] + list(map(int, input().split()))  # 건설 시간
    order = [[] for _ in range(N+1)]  # 건설 순서 규칙
    degree = [0] * (N+1)  # 진입차수
    dp = [0] * (N+1)  # 주어진 건물까지 걸리는 시간

    for _ in range(K):
        x, y = map(int, input().split())
        order[x].append(y)
        degree[y] += 1  # 진입차수 계산

    q = deque()
    for i in range(1, N+1):
        if degree[i] == 0:  # 진입차수 0인 것을 queue에 넣기
            q.append(i)
            dp[i] = d[i]

    while q:
        x = q.popleft()
        for j in order[x]:
            degree[j] -= 1  # 진입차수 줄이기

            # 앞에 지어질 건물들의 걸리는 시간들 중
            # 가장 긴 시간에 맞춰주어야 모든 건물을 짓고 해당 건물을 지을 수 있음
            dp[j] = max(dp[x] + d[j], dp[j])

            if degree[j] == 0:  # 진입차수가 0인 것들을 queue에 넣기
                q.append(j)
    W = int(input())

    print(dp[W])