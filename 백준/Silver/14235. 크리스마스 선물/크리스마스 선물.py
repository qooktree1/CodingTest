import sys
import heapq
input = sys.stdin.readline

heap = []
n = int(input())
for _ in range(n):
    num = list(map(int, input().split()))
    if num == [0]:
        if heap:
            # 첫번째 인덱스에 num[i]가 저장됨
            x = heapq.heappop(heap)[1]
            print(x)
        else:
            print(-1)
    else:
        for i in range(1, len(num)):
            # -num[i]: 음수를 주기 때문에 원래 숫자가 클수록 가장 앞에 있음
            heapq.heappush(heap, (-num[i], num[i]))

