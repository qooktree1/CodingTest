import sys
input = sys.stdin.readline

n = int(input())
tri = []
for _ in range(n):
    tri.append(list(map(int, input().split())))

for i in range(1, n):

    for j in range(len(tri[i])):
        # 맨 왼쪽 대각선
        if j == 0:
            tri[i][j] += tri[i-1][j]

        # 맨 오른쪽 대각선
        elif j == i:
            tri[i][j] += tri[i-1][j-1]
        else:
            tri[i][j] += max(tri[i-1][j-1], tri[i-1][j])
print(max(tri[-1]))