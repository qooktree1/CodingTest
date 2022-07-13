import sys
input = sys.stdin.readline
from collections import deque


def bfs(x):
    visited = [-1] * (n + 1)
    visited[x] = 0
    q = deque()
    q.append(x)
    while q:
        x = q.popleft()
        for n_x, cost in tree[x]:
            if visited[n_x] == -1:
                q.append(n_x)
                visited[n_x] = visited[x] + cost
    return [visited.index(max(visited)), max(visited)]


n = int(input())
tree = [[] for _ in range(n+1)]
for _ in range(n-1):
    a, b, c = map(int, input().split())
    tree[a].append([b, c])
    tree[b].append([a, c])

print(bfs(bfs(1)[0])[1])