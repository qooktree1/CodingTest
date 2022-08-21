import sys, heapq
input = sys.stdin.readline

N, M = map(int, input().split())
lst = [[] for _ in range(N+1)]

for _ in range(M):
    a, b, c = map(int, input().split())
    lst[a].append([b, c])
    lst[b].append([a, c])

visited = [float('inf')] * (N+1)
visited[0] = 0
visited[1] = 0

# cost, number
q = [[0, 1]]
while q:
    cost, x = heapq.heappop(q)


    for n_x, n_c in lst[x]:
        # 현재 헛간을 거쳐서 다른 헛간으로 이동하는 거리가 더 짧은 경우
        if visited[n_x] > cost + n_c:
            visited[n_x] = cost + n_c
            heapq.heappush(q, [cost + n_c, n_x])

print(visited[N])