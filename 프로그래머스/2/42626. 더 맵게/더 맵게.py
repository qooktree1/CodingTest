import heapq

def solution(scoville, K):
    answer = 0
    heapq.heapify(scoville)
    if scoville[0] >= K: return 0
    while len(scoville) >= 2:
        answer += 1
        first = heapq.heappop(scoville)
        second = heapq.heappop(scoville)
        heapq.heappush(scoville, first + second * 2)
        
        if scoville[0] >= K: return answer
    
    return -1