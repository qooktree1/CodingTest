import sys
input = sys.stdin.readline


def dfs(x, cnt):
    if x == 1:
        global ans
        ans = min(cnt, ans)
        return ans

    # 가지치기
    if ans <= cnt:
        return

    if x % 3 == 0:
        dfs(x / 3, cnt + 1)
    if x % 2 == 0:
        dfs(x / 2, cnt + 1)
    dfs(x - 1, cnt + 1)

X = int(input())
ans = 10 ** 6
dfs(X, 0)
print(ans)