from collections import deque


def dfs(s):
    print(s, end=' ')
    visited[s] = 1
    for i in lst[s]:
        if not visited[i]:
            dfs(i)


def bfs(s):
    visited[s] = 1
    q = deque([s])
    while q:
        x = q.popleft()
        print(x, end=' ')
        for i in lst[x]:
            if not visited[i]:
                visited[i] = 1
                q.append(i)


N, M, V = map(int, input().split())
lst = [[] for _ in range(N+1)]
for _ in range(M):
    s, e = map(int, input().split())
    lst[s].append(e)
    lst[e].append(s)
for i in range(1, N + 1):
    lst[i].sort()
visited = [0] * (N + 1)
dfs(V)
print()
visited = [0] * (N + 1)
bfs(V)