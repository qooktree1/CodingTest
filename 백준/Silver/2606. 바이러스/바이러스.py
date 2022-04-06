from collections import deque

def dfs(s):
    q = deque()
    q.append(s)
    cnt = -1  # 1번 컴퓨터를 제외한 나머지 연결된 컴퓨터의 수
    while q:
        x = q.popleft()
        if not visited[x]:
            visited[x] = 1
            cnt += 1
            for i in lst[x]:
                q.append(i)

    return cnt


N = int(input())
M = int(input())
lst = [[] * (N+1) for _ in range(N+1)]
visited = [0] * (N+1)
for _ in range(M):
    c1, c2 = map(int, input().split())
    lst[c1].append(c2)
    lst[c2].append(c1)

print(dfs(1))