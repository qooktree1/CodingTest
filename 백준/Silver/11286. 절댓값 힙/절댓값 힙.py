import sys
import heapq
input = sys.stdin.readline

N = int(input())
q = []
for _ in range(N):
    num = int(input())
    if num != 0:
        # 최대힙과 같은 맥락
        # 절대값을 우선순위로 뒤에는 원래 숫자
        heapq.heappush(q, (abs(num), num))
    elif num == 0:
        # 빈 배열이면 0 출력
        if not q:
            print(0)
        else:
            # 1번째 인덱스가 원래 숫자임
            print(heapq.heappop(q)[1])