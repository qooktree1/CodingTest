import sys, heapq
input = sys.stdin.readline

N, K = map(int, input().split())
jewels = sorted([list(map(int, input().split())) for _ in range(N)])
bags = sorted([int(input()) for _ in range(K)])

answer = 0
heap_bag = []
for i in bags:

    # 보석이 존재하고 가방에 담을 수 있는 무게가 보석의 무게와 같거나 클때
    while jewels and i >= jewels[0][0]:
        heapq.heappush(heap_bag, [-jewels[0][1], jewels[0][1]])
        heapq.heappop(jewels)

    if heap_bag:
        answer += heapq.heappop(heap_bag)[1]

print(answer)