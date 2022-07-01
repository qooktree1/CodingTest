import sys
input = sys.stdin.readline


def dfs(x, chk):
    visited[x] = 1
    if chk == 4:
        global ans
        ans = 1
        return
    for n_x in friends[x]:
        if not visited[n_x]:
            dfs(n_x, chk + 1)
            visited[n_x] = 0


# N, M = 사람의 수, 친구 관계의 수
N, M = map(int, input().split())
friends = [[] for _ in range(N)]
ans = 0
for _ in range(M):
    a, b = map(int, input().split())
    friends[a].append(b)
    friends[b].append(a)

for i in range(N):
    chk = 0
    visited = [0] * N
    dfs(i, 0)
    if ans:
        break
print(ans)