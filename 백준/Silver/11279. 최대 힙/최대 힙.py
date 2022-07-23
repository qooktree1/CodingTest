import sys
import heapq
input = sys.stdin.readline

N = int(input())
q = []
for _ in range(N):
    num = int(input())
    if num > 0:
        # 최대힙 (우선순위, 원래 숫자)
        heapq.heappush(q, (-num, num))
    elif num == 0:
        if not q:
            print(0)
        else:
            # 원래 숫자를 출력하기 위해 1번째 인덱스
            print(heapq.heappop(q)[1])