import sys

# 아이디어: 현재 가격보다 저렴한 도시가 나타나지 않으면
# -> 현재 가격으로 계속 충전
N = int(input())
roads = list(map(int, input().split()))
gas_station = list(map(int, input().split()))
distance = gas_station[0]  # 초기 가격
ans = 0
for i in range(N-1):
    # 이전 가격과 현재 가격 비교
    distance = min(distance, gas_station[i])

    # 작은 가격 x 도로의 길이
    ans += distance * roads[i]
print(ans)