answer = []

def dfs(path, tickets, visited):
    global answer
    
    
    if 0 not in visited:  # 모두 방문하였으면
        # 방문했던 경로를 answer 배열에 추가
        tmp = path[:]
        return answer.append(tmp)
    
    for i in range(len(tickets)):
        # 방문하지 않았고 가장 최근에 방문한 공항이면
        if not visited[i] and tickets[i][0] == path[-1]:
            
            # 방문 표시 및 항공 추가
            path.append(tickets[i][1])
            visited[i] = 1
            dfs(path, tickets, visited)
            
            # 방문 표시 및 항공 해제
            path.pop()
            visited[i] = 0


def solution(tickets):
    global answer
    visited = [0] * len(tickets)
    path = ["ICN"]
    dfs(path, tickets, visited)
    answer.sort()  # 알파벳 순 정렬
        
    return answer[0]