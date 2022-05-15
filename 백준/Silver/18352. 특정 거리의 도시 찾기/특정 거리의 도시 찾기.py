import sys
input = sys.stdin.readline
from collections import deque


def bfs(s):
    global ans
    q = deque()
    dist = 0
    visited[s] = 1
    q.append([s, dist])  # 도시번호, 거리
    while q:
        x, dist = q.popleft()
        if dist == K:
            ans.append(x)
            continue

        for n_x in graph[x]:
            if not visited[n_x]:
                q.append([n_x, dist+1])
                visited[n_x] = 1



N, M, K, X = map(int, input().split())
graph = [[] for _ in range(N+1)]
visited = [0] * (N+1)
for _ in range(M):
    A, B = map(int, input().split())
    graph[A].append(B)
ans = []

bfs(X)
ans.sort()
if ans:
    for a in ans:
        print(a)
else:
    print(-1)