from collections import deque

def bfs(x, graph, distance, visited):
    q = deque([x])
    visited[x] = 1  # 1번 노드 방문
    while q:
        x = q.popleft()
        for n_x in graph[x]:
            if not visited[n_x]:
                visited[n_x] = 1  # 노드 방문
                q.append(n_x)
                distance[n_x] = distance[x] + 1

    return distance

def solution(n, edge):
    # 인덱스 번호마다 연결되어 있는 노드를 가지는 배열 생성
    graph = [[] for _ in range(n+1)]
    for a, b in edge:
        graph[a].append(b)
        graph[b].append(a)

    # visited: 방문 표시, distance: 거리 표시
    visited = [0] * (n + 1)
    distance = [0] * (n + 1)
    distance = bfs(1, graph, distance, visited)
    
    print(distance)
    # 최대 거리의 개수를 구하기
    return distance.count(max(distance))