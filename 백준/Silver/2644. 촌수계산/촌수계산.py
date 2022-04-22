def dfs(x, cnt):
    for n_x in family[x]:
        if not visited[n_x]:
            visited[n_x] = visited[x] + 1
            dfs(n_x, cnt + 1)


n = int(input())
a, b = map(int, input().split())
m = int(input())
family = [[] * (n+1) for _ in range(n+1)]
for _ in range(m):
    x, y = map(int, input().split())
    family[x].append(y)
    family[y].append(x)
# print(family)
visited = [0] * (n+1)

dfs(a, 0)
if not visited[b]:
    print(-1)
else:
    print(visited[b])