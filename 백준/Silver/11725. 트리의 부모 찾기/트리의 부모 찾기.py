import sys
sys.setrecursionlimit(10**6)
input = sys.stdin.readline

def dfs(x):
    for i in tree[x]:
        if not parent[i]:
            parent[i] = x
            dfs(i)


N = int(input())
tree = [[] for _ in range(N+1)]
parent = [0] * (N+1)
for _ in range(1, N):
    a, b = map(int, input().split())
    tree[a].append(b)
    tree[b].append(a)
ans = []
# tree = [[], [6, 4], [4], [6, 5], [1, 2, 7], [3], [1, 3], [4]]

dfs(1)

for n in range(2, N+1):
    print(parent[n])