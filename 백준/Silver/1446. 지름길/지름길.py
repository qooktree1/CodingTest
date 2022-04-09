N, D = map(int, input().split())
lst = [[] for _ in range(10001)]
distance = [10001] * (D+1)
for i in range(N):
    start, end, dist = map(int, input().split())
    if end <= D:  # 도착 위치가 고속도로의 길이를 벗어나는 경우를 제외
        lst[start].append([end, dist])

distance[0] = 0  # 시작위치는 0부터

# 거리 만큼
for i in range(D+1):
    # 현재 거리와 (직전의 거리 + 1) 를 비교
    # 현재의 거리가 지름길로 인해 바뀌였다면 if문을 들어가지 않음
    if distance[i] > distance[i-1] + 1:
        distance[i] = distance[i-1] + 1

    # 지름길이 있으면
    if lst[i]:
        for e, d in lst[i]:  # 도착 위치와 지름길의 길이
            # 도착 위치에 (현재 거리 + 지름길의 길이) 로 초기화
            if distance[e] > distance[i] + d:
                distance[e] = distance[i] + d

print(distance[-1])