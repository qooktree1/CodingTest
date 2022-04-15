import sys
from collections import deque
input = sys.stdin.readline


def bfs(st):
    global ans
    num = 0
    visited = [0] * (N+1)
    visited[st] = 1
    q = deque([[st, num]])
    while q:
        x, num = q.popleft()
        if num == K:
            ans.append(x)
        elif num < K:
            for i in graph[x]:
                if not visited[i]:
                    q.append([i, num + 1])
                    visited[i] = 1


# N : 도시의 개수
# M : 도로의 개수
# K : 거리 정보
# X : 출발 도시의 번호
N, M, K, X = map(int, input().split())
graph = [[] for _ in range(N+1)]
for _ in range(M):
    a, b = map(int, input().split())
    graph[a].append(b)
ans = []
bfs(X)
if ans:
    ans.sort()
    for a in ans:
        print(a)
else:
    print(-1)