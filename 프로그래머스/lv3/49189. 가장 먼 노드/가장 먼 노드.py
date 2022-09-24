from collections import deque


def bfs(node, graph, distance):
    q = deque()
    q.append(node)
    while q:
        x = q.popleft()
        for n_x in graph[x]:
            if not distance[n_x]:
                q.append(n_x)
                distance[n_x] = distance[x] + 1
    return distance

def solution(n, edge):
    # 인덱스 번호마다 연결되어 있는 노드를 가지는 배열 생성
    graph = [[] for _ in range(n+1)]
    for a, b in edge:
        graph[a].append(b)
        graph[b].append(a)
    
    # distance: 거리 표시
    distance = [0] * (n+1)
    
    result = bfs(1, graph, distance)
    max_distance = max(result)
    return result[2:].count(max_distance)