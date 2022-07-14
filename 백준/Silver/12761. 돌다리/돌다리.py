import sys
from collections import deque


def bfs():
    q = deque()
    q.append(N)
    while q:
        x = q.popleft()
        if x == M:
            ans.append(visited[x])
        for i in range(8):
            if i < 6:
                nx = x + direct[i]
                if 0 < nx <= 100000 and not visited[nx]:
                    q.append(nx)
                    visited[nx] = visited[x] + 1
            else:
                nx = x * direct[i]
                if 0 < nx <= 100000 and not visited[nx]:
                    q.append(nx)
                    visited[nx] = visited[x] + 1


A, B, N, M = map(int, input().split())
ans = []
direct = [1, -1, A, -A, B, -B, A, B]
visited = [0] * 100001
bfs()
print(ans[0])