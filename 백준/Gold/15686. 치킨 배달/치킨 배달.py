from itertools import combinations


def selection():
    for i in range(N):
        for j in range(N):
            if matrix[i][j] == 2:
                chicken.append([i, j])  # 치킨집 배열
            elif matrix[i][j] == 1:
                house.append([i, j])  # 집 배열


def calc(chicken_store):
    answer = 0

    for x in house:
        tmp = []
        for c in chicken_store:
            # 집 각각의 치킨집과의 거리
            tmp.append(abs(x[0] - c[0]) + abs(x[1] - c[1]))
        # 가장 최소로 갈 수 있는 거리를 answer 에 더함
        answer += min(tmp)
    return answer


N, M = map(int, input().split())
matrix = [list(map(int, input().split())) for _ in range(N)]
# 0 : 빈 칸
# 1 : 집
# 2 : 치킨집

# 치킨, 집 정렬
chicken = []
house = []
selection()
min_ = 100000
stores = combinations(chicken, M)  # 치킨집의 조합 == stores
for m in stores:
    min_ = min(min_, calc(m))  # answer 가 최소인 경우
print(min_)