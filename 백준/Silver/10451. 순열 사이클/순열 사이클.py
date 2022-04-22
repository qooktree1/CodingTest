def dfs(x):
    visited[x] = 1
    for n_x in graph[x]:
        if not visited[n_x]:
            dfs(n_x)


T = int(input())
for tc in range(T):
    N = int(input())
    graph = [[] for _ in range(N+1)]
    lst = list(map(int, input().split()))
    for i in range(len(lst)):
        graph[i+1].append(lst[i])
    visited = [0] * (N+1)
    ans = 0
    for i in range(len(graph)):
        if graph[i] and not visited[i]:
            dfs(i)
            ans += 1
    print(ans)