# 모든 좌표 paper
paper = [[0] * 100 for _ in range(100)]

# 사각형의 꼭짓점 좌표 입력
T = int(input())
for _ in range(T):
    x, y = map(int, input().split())
    
    for i in range(x, x + 10):
        for j in range(y, y + 10):
            paper[i][j] = 1

# 1이 들어간 공간을 count할 cnt 변수
cnt = 0


# 전체 paper 에서 1인 것을 count
for i in range(100):
    for j in range(100):
        if paper[i][j] == 1:
            cnt += 1
print(cnt)