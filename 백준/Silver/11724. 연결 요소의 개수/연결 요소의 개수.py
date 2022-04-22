import sys
sys.setrecursionlimit(10 ** 6)
input = sys.stdin.readline


def dfs(x):
    visited[x] = 1
    for n_x in graph[x]:
        if not visited[n_x]:
            dfs(n_x)


N, M = map(int, input().split())
graph = [[] for _ in range(N+1)]
ans = 0
visited = [0] * (N+1)

for _ in range(M):
    u, v = map(int, input().split())
    graph[u].append(v)
    graph[v].append(u)


for i in range(1, N+1):
    if not visited[i]:
        dfs(i)
        ans += 1
print(ans)