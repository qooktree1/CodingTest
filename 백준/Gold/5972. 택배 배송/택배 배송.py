import sys, heapq
input = sys.stdin.readline

N, M = map(int, input().split())
lst = [[] for _ in range(N+1)]

for _ in range(M):
    a, b, c = map(int ,input().split())
    lst[a].append([b, c])
    lst[b].append([a, c])

visited = [float('inf')] * (N+1)
visited[0] = 0
visited[1] = 0

# cost, number
q = [[0, 1]]
while q:
    cost, x = heapq.heappop(q)

    if visited[x] >= cost:

        for n_x, n_c in lst[x]:
            if visited[n_x] > cost + n_c:
                visited[n_x] = cost + n_c
                heapq.heappush(q, [cost + n_c, n_x])

print(visited[N])