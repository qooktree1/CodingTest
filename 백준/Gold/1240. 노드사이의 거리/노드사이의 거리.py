import sys
input = sys.stdin.readline
from collections import deque


def bfs(x, y):
    q = deque()
    q.append(x)
    while q:
        x = q.popleft()
        if x == y:
            return visited[x]
        for n_x, cost in tree[x]:
            if not visited[n_x]:
                visited[n_x] = visited[x] + cost
                q.append(n_x)



N, M = map(int, input().split())
tree = [[] for _ in range(1001)]
nodes = []
answer = []

for _ in range(N-1):
    a, b, c = map(int, input().split())
    tree[a].append([b, c])
    tree[b].append([a, c])

for _ in range(M):
    a, b = map(int, input().split())
    nodes.append([a, b])

for i in range(len(nodes)):
    visited = [0] * 1001
    answer.append(bfs(nodes[i][0], nodes[i][1]))

for a in answer:
    print(a)