def dfs(x, cnt):
    global ans
    if x == 1:
        if cnt < ans:
            ans = cnt
        return
    
    # 가지치기
    if cnt >= ans:
        return

    if x % 3 == 0:
        dfs(x / 3, cnt + 1)
    if x % 2 == 0:
        dfs(x / 2, cnt + 1)
    dfs(x - 1, cnt + 1)


N = int(input())
ans = float('inf')
dfs(N, 0)
print(ans)