import heapq


def solution(operations):
    q = []
    for operation in operations:
        print(q)
        tmp = operation.split(" ")
        
        # 큐에 숫자 삽입
        if tmp[0] == "I":
            heapq.heappush(q, int(tmp[1]))
            
        elif tmp[0] == "D" and q:
            
            # 최솟값 삭제
            if tmp[1] == "-1":
                heapq.heappop(q)
            
            # 최댓값 삭제
            elif tmp[1] == "1":
                q.remove(max(q))
    q.sort()
    if q:
        return [q[-1], q[0]]
    
    else:
        return [0, 0]