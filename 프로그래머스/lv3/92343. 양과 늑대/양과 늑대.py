max_sheep_cnt = 0
def solution(info, edges):
    visited = [0] * len(info)
    visited[0] = 1
    def dfs(sheep, wolf):
        global max_sheep_cnt
        if sheep <= wolf:  # 늑대가 양의 개수 이상일 시
            return
        max_sheep_cnt = max(max_sheep_cnt, sheep)
        
        for p, c in edges:
            # 부모 노드 방문 O and 자식 노드 방문 안했을 시
            if visited[p] and not visited[c]:
                visited[c] = 1
                
                # 늑대일 시
                if info[c]:
                    dfs(sheep, wolf + 1)
                
                # 양일 시
                else:
                    dfs(sheep + 1, wolf)
                visited[c] = 0
    dfs(1, 0)
    return max_sheep_cnt