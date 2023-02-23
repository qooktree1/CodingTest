import sys
N, M = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(N)]
arr.sort(key=lambda x: (x[1], -x[0]))  # 가격이 싼 순, 무게가 큰 순

ans = sys.maxsize
weight, same = 0, 0
flag = False

for i in range(N):
    weight += arr[i][0]  # 고기 무게 증가

    # 같은 가격의 고기를 구매할 경우
    if i >= 1 and arr[i][1] == arr[i - 1][1]:
        same += arr[i][1]  # 같은 가격 고기 무게 추가

    # 다른 가격의 고기를 구매할 경우
    else: same = 0

    # 고기 무게가 은혜가 필요한 양에 다다르면
    if weight >= M:
        ans = min(ans, arr[i][1] + same)  # 같은 가격 고기 + 현재 고기 가격 비교
        flag = True

print(ans if flag else -1)
