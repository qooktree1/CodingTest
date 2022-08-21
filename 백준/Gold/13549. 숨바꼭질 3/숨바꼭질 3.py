import sys, heapq

N, K = map(int, input().split())
visited = [float("inf")] * 200001
visited[N] = 0
q = [[0, N]]

while q:
    time, x = heapq.heappop(q)
    if x == K:
        print(time)
        break

    if 0 <= x * 2 <= 100000 and time < visited[x * 2]:
        visited[x * 2] = time
        heapq.heappush(q, [time, x * 2])

    if 0 <= x + 1 <= 100000 and time + 1 < visited[x + 1]:
        visited[x + 1] = time + 1
        heapq.heappush(q, [time + 1, x + 1])

    if 0 <= x - 1 <= 100000 and time + 1 < visited[x - 1]:
        visited[x - 1] = time + 1
        heapq.heappush(q, [time + 1, x - 1])