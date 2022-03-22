def max_check(a, b):
    if a < b:
        a = b
    return a


# N : 세로, M : 가로
N, M = map(int, input().split())
tetris = [list(map(int, input().split())) for _ in range(N)]
max_ = 0
# ㅁㅁㅁㅁ
for i in range(N):
    for j in range(M-3):
        ssum = 0
        for n in range(4):
            ssum += tetris[i][j+n]
        max_ = max_check(max_, ssum)

# ㅁ
# ㅁ
# ㅁ
# ㅁ
for i in range(N-3):
    for j in range(M):
        ssum = 0
        for n in range(4):
            ssum += tetris[i+n][j]
        max_ = max_check(max_, ssum)

# ㅁㅁ
# ㅁㅁ
for i in range(N-1):
    for j in range(M-1):
        ssum = 0
        for n in range(2):
            for m in range(2):
                ssum += tetris[i+n][j+m]
        max_ = max_check(max_, ssum)

# ㅁ
# ㅁ
# ㅁㅁ
for j in range(M-1):
    for i in range(N-2):
        ssum = 0
        for n in range(3):
            ssum += tetris[i+n][j]
        ssum += tetris[i+n][j+1]
        max_ = max_check(max_, ssum)

#   ㅁ
#   ㅁ
# ㅁㅁ
for i in range(2, N):
    for j in range(M-1):
        ssum = 0
        ssum += tetris[i][j]
        for n in range(3):
            ssum += tetris[i-n][j+1]
        max_ = max_check(max_, ssum)

# ㅁㅁㅁ
#    ㅁ
for i in range(N-1):
    for j in range(M-2):
        ssum = 0
        for n in range(3):
            ssum += tetris[i][j+n]
        ssum += tetris[i+1][j+n]
        max_ = max_check(max_, ssum)

# ㅁㅁ
# ㅁ
# ㅁ
for i in range(N-2):
    for j in range(M-1):
        ssum = 0
        ssum += tetris[i][j+1]
        for n in range(3):
            ssum += tetris[i+n][j]
        max_ = max_check(max_, ssum)

# ㅁ
# ㅁㅁㅁ
for i in range(N-1):
    for j in range(M-2):
        ssum = 0
        ssum += tetris[i][j]
        for n in range(3):
            ssum += tetris[i+1][j+n]
        max_ = max_check(max_, ssum)

# ㅁㅁㅁ
# ㅁ
for j in range(N-1):
    for i in range(M-2):
        ssum = 0
        for n in range(3):
            if n == 0:
                ssum += tetris[j+1][i+n]
            ssum += tetris[j][i+n]
        max_ = max_check(max_, ssum)

# ㅁㅁ
#   ㅁ
#   ㅁ
for i in range(N-2):
    for j in range(M-1):
        ssum = 0
        ssum += tetris[i][j]
        for n in range(3):
            ssum += tetris[i+n][j+1]
        max_ = max_check(max_, ssum)

#    ㅁ
# ㅁㅁㅁ
for i in range(1, N):
    for j in range(M-2):
        ssum = 0
        for n in range(3):
            ssum += tetris[i][j+n]
        ssum += tetris[i-1][j+n]
        max_ = max_check(max_, ssum)

# ㅁ
# ㅁㅁ
#   ㅁ
for i in range(N-2):
    for j in range(M-1):
        ssum = 0
        ssum += tetris[i][j]
        ssum += tetris[i+1][j]
        ssum += tetris[i+1][j+1]
        ssum += tetris[i+2][j+1]
        max_ = max_check(max_, ssum)

#   ㅁㅁ
# ㅁㅁ
for i in range(1, N):
    for j in range(M-2):
        ssum = 0
        ssum += tetris[i][j]
        ssum += tetris[i][j+1]
        ssum += tetris[i-1][j+1]
        ssum += tetris[i-1][j+2]
        max_ = max_check(max_, ssum)

#   ㅁ
# ㅁㅁ
# ㅁ
for i in range(N-2):
    for j in range(M-1):
        ssum = 0
        ssum += tetris[i][j+1]
        ssum += tetris[i+1][j+1]
        ssum += tetris[i+1][j]
        ssum += tetris[i+2][j]
        max_ = max_check(max_, ssum)

# ㅁㅁ
#   ㅁㅁ
for i in range(N-1):
    for j in range(M-2):
        ssum = 0
        ssum += tetris[i][j]
        ssum += tetris[i][j+1]
        ssum += tetris[i+1][j+1]
        ssum += tetris[i+1][j+2]
        max_ = max_check(max_, ssum)

# ㅁㅁㅁ
#   ㅁ
for i in range(N-1):
    for j in range(M-2):
        ssum = 0
        for n in range(3):
            ssum += tetris[i][j+n]
        ssum += tetris[i+1][j+n-1]
        max_ = max_check(max_, ssum)

#   ㅁ
# ㅁㅁ
#   ㅁ
for i in range(N-2):
    for j in range(1, M):
        ssum = 0
        for n in range(3):
            ssum += tetris[i+n][j]
        ssum += tetris[i+n-1][j-1]
        max_ = max_check(max_, ssum)

#  ㅁ
# ㅁㅁㅁ
for i in range(1, N):
    for j in range(M-2):
        ssum = 0
        for n in range(3):
            ssum += tetris[i][j+n]
        ssum += tetris[i-1][j+n-1]
        max_ = max_check(max_, ssum)

# ㅁ
# ㅁㅁ
# ㅁ
for i in range(N-2):
    for j in range(M-1):
        ssum = 0
        for n in range(3):
            ssum += tetris[i+n][j]
        ssum += tetris[i+n-1][j+1]
        max_ = max_check(max_, ssum)

print(max_)
