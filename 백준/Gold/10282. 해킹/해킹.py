import sys
import heapq
input = sys.stdin.readline


# heapq 사용 이유:
T = int(input())
for _ in range(T):
    n, d, c = map(int, input().split())
    tree = [[] for _ in range(n+1)]
    time = [float('inf')] * (n+1)
    time[c] = 0

    for _ in range(d):
        # a -> b 의존, b 감염시 s초 후 a도 감염
        a, b, s = map(int, input().split())
        tree[b].append([a, s])
    q = [[0, c]]
    while q:
        weight, start = heapq.heappop(q)
        for next_start, next_weight in tree[start]:

            # Dijkstra
            if time[next_start] > weight + next_weight:
                time[next_start] = weight + next_weight
                # 걸리는 시간이 적은 순으로 정렬
                heapq.heappush(q, [weight + next_weight, next_start])

    max_ = 0
    cnt = 0
    # print(time)
    # [inf, inf, 0, 5] => 2 5
    # [inf, 0, 2, 6] => 3 6

    for i in time:
        # 감염시 weight 값이 추가 됐으므로 count
        if i != float('inf'):
            # 걸린 시간 계산
            max_ = max(i, max_)
            cnt += 1
    print(cnt, max_)