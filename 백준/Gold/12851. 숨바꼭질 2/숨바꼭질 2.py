import sys
sys.setrecursionlimit(10**6)
from collections import deque


def bfs(X):
    global ans
    q = deque([X])

    while q:
        x = q.popleft()

        if x == K:
            ans += 1
            continue

        for n_x in [x+1, 2*x, x-1]:
            if 0 <= n_x < 100001 and (not visited[n_x] or visited[n_x] == visited[x] + 1):
                visited[n_x] = visited[x] + 1
                q.append(n_x)


N, K = map(int, input().split())
ans = 0
visited = [0] * 100001
bfs(N)
print(visited[K])
print(ans)
