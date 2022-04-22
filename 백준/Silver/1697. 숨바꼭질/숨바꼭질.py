from collections import deque
min_time = 1000000

def bfs(x):
    global min_time
    q = deque([x])
    visited = [0] * (min_time+1)
    while q:
        c = q.popleft()
        if c == K:  # 종료조건
            return visited[c]

        for i in (c-1, c+1, 2*c):
            if 0 <= i <= min_time and not visited[i]:
                visited[i] = visited[c] + 1
                q.append(i)


N, K = map(int, input().split())
print(bfs(N))