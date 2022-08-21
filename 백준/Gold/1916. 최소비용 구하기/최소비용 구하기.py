import sys
import heapq
input = sys.stdin.readline

N = int(input())
M = int(input())
lst = [[] for _ in range(N+1)]
for _ in range(M):
    a, b, cost = map(int, input().split())
    lst[a].append([b, cost])

start_point, end_point = map(int, input().split())
visited = [float("inf")] * (N+1)
visited[start_point] = 0

# 다익스트라
q = [[0, start_point]]
while q:
    # 현재 누적 비용, 도시번호
    cost, point = heapq.heappop(q)

    # 현재 누적비용보다 방문 비용이 작으면 접근 X
    if visited[point] >= cost:
        # 도시번호를 조회
        for next_point, next_cost in lst[point]:
            # 현재 누적 비용이 방문비용 + 현재비용 보다 싸야 함
            if visited[next_point] > cost + next_cost:
                visited[next_point] = cost + next_cost
                heapq.heappush(q, [cost + next_cost, next_point])

print(visited[end_point])