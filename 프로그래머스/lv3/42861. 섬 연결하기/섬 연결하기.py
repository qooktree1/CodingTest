def solution(n, costs):
    costs.sort(key=lambda x: x[2])  # 비용이 가장 적은 것 부터 시작하게 정렬
    visited = [0] * n  # 모든 노드에 대한 방문 표시
    visited[costs[0][0]] = 1  # 첫번째 방문
    answer = 0
    
    # 모든 노드 방문할때까지
    while sum(visited) < n:
        
        for cost in costs:
            # 만약 둘 다 방문했으면 pass
            if visited[cost[0]] and visited[cost[1]]:
                continue
                
            # 둘 중 하나라도 방문을 하지 않았다면
            if visited[cost[0]] or visited[cost[1]]:
                visited[cost[0]] = visited[cost[1]] = 1
                answer += cost[2]
                break  # 반복문을 다시 돌아 변화된 visited를 다시 검사
                
    return answer