import sys
sys.setrecursionlimit(10**6)
input = sys.stdin.readline
from collections import deque


def bfs(x):
    q = deque()
    q.append(x)
    while q:
        x = q.popleft()
        for dice in range(1, 7):
            n_x = x + dice

            # 100 칸을 넘어가서 이동 불가
            if n_x <= 100:
                if case[n_x]:
                    n_x = case[n_x]

                # 방문하지 않았다면 전의 방문한 곳에서 +1
                if not visited[n_x]:
                    q.append(n_x)
                    visited[n_x] = visited[x] + 1


N, M = map(int, input().split())
case = [0 for _ in range(101)]  # 사다리 & 뱀이 있는 칸에 도착시 넘어갈 칸 표시할 배열
visited = [0] * 101  # 방문 및 거리 표시를 할 visited 배열
for _ in range(N):
    x, y = map(int, input().split())
    case[x] = y
for _ in range(M):
    u, v = map(int, input().split())
    case[u] = v

bfs(1)
print(visited[100])