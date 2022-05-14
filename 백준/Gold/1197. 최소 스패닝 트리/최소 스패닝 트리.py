# Prim Algorithm
import sys
import heapq
input = sys.stdin.readline

V, E = map(int, input().split())
graph = [[] for _ in range(V+1)]
for _ in range(E):
    # 무방향 그래프
    A, B, C = map(int, input().split())
    graph[A].append([B, C])
    graph[B].append([A, C])
ans = 0

visited = [0] * (V+1)
q = [[0, 1]]  # cost, start
while q:
    cost, start = heapq.heappop(q)
    if not visited[start]:
        visited[start] = 1  # 방문 표시
        ans += cost  # 가중치 증가

        # 현재 정점과 연결된 다음 정점들을 push ( 최소 )
        for n_start, n_cost in graph[start]:
            heapq.heappush(q, [n_cost, n_start])
print(ans)