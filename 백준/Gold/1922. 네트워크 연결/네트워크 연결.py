import sys
input = sys.stdin.readline
import heapq


def prim(x):
    global ans
    heap = []
    visited[x] = 1
    for v in graph[x]:  # 1과 연결된 정점들 push
        heapq.heappush(heap, v)
        
    while heap:
        cost, computer = heapq.heappop(heap)
        if not visited[computer]:
            visited[computer] = 1
            ans += cost
            for a in graph[computer]:
                heapq.heappush(heap, a)  # 연결된 정점들 push


N = int(input())
M = int(input())
graph = [[] for _ in range(N+1)]
for _ in range(M):
    a, b, c = map(int, input().split())
    graph[a].append([c, b])
    graph[b].append([c, a])
visited = [0] * (N+1)
ans = 0
prim(1)
print(ans)