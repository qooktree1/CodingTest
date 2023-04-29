# 이진 탐색
def solution(stones, k):
    start = 1
    end = max(stones)
    while start <= end:
        mid = (start + end) // 2
        cnt = 0
        for stone in stones:
            if stone - mid <= 0:
                cnt += 1
            else:
                cnt = 0
            if cnt >= k:
                break
        # 다리를 건널 수 없는 경우
        if cnt >= k:
            end = mid - 1
            
        # 다리를 건널 수 있는 경우
        else:
            start = mid + 1
    return start