import heapq

def solution(n, works):
    array = []
    for work in works:
        heapq.heappush(array,  (-work, work))
    
    for i in range(n):
        work = heapq.heappop(array)[1]
        if work == 0:
            return 0
        work -= 1
        heapq.heappush(array, (-work, work))
        
    answer = 0
    
    for w1, w2 in array:
        answer += w2 ** 2
    return answer