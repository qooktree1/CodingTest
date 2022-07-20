import sys
input = sys.stdin.readline
from collections import deque


def bfs(node):
    global ans
    q = deque()
    q.append(node)
    while q:
        x = q.popleft()
        for n_x in tree[x]:
            if x != 1 and len(tree[x]) == 1:
                ans += visited[x]
            if not visited[n_x]:
                visited[n_x] = visited[x] + 1
                q.append(n_x)


N = int(input())
tree = [[] for _ in range(N+1)]
visited = [0] * (N+1)
for _ in range(N-1):
    a, b = map(int, input().split())
    tree[a].append(b)
    tree[b].append(a)

ans = 0
bfs(1)
if ans % 2 == 0:
    print("No")
else:
    print("Yes")