import sys
input = sys.stdin.readline

def dfs(x):
    stack = [x]
    while stack:
        x = stack.pop()
        for n_x in graph[x]:
            if not visited[n_x]:
                # 방문 표시에 들어갈 숫자를 부모 숫자로
                visited[n_x] = x
                stack.append(n_x)


N = int(input())
graph = [[] for _ in range(N+1)]
visited = [0] * (N+1)
for _ in range(N-1):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

dfs(1)
for ans in visited[2:]:
    print(ans)
