def solution(m, n, puddles):
    path = [[0] * m for _ in range(n)]
    puddles = [[b-1,a-1] for [a, b] in puddles]
    path[0][0] = 1
    for i in range(n):
        for j in range(m):
            if i == 0 and j == 0:
                continue
            elif [i, j] in puddles:
                path[i][j] = 0
            else:
                path[i][j] = path[i][j-1] + path[i-1][j]
                
    return path[n-1][m-1] % 1000000007