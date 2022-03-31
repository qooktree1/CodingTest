import sys
from collections import deque
input = sys.stdin.readline


def bfs(x, cnt):
    q = deque([x])
    visited[x] = 1
    while q:
        if sum(visited) == N:  # 모두 방문 하면
            return cnt
        x = q.popleft()
        for i in graph[x]:
            if not visited[i]:
                # 방문 시 cnt 증가
                visited[i] = 1
                cnt += 1
                q.append(i)


T = int(input())
for _ in range(1, T + 1):
    # N : 국가의 수, M : 비행기 종류
    N, M = map(int, input().split())
    graph = [[] for _ in range(N+1)]
    visited = [0] * (N+1)
    for _ in range(M):
        a, b = map(int, input().split())
        graph[a].append(b)
        graph[b].append(a)

    ans = bfs(1, 0)
    print(ans)