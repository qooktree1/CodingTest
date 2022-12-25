from collections import deque

dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

N, L, R = map(int, input().split())
population = [list(map(int, input().split())) for _ in range(N)]
time = 0


def bfs(i, j):
    q = deque()
    q.append([i, j])
    visited_place = [[i, j]]  # 방문한 곳들의 좌표
    while q:
        x, y = q.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < N and 0 <= ny < N and not visited[nx][ny] and L <= abs(population[x][y] - population[nx][ny]) <= R:
                visited[nx][ny] = 1
                q.append([nx, ny])
                visited_place.append([nx, ny])
    return visited_place


while True:
    visited = [[0] * (N+1) for _ in range(N+1)]
    wayToGo = False  # 연합을 이룰 수 있는지 check하는 변수
    for i in range(N):
        for j in range(N):
            if not visited[i][j]:
                visited[i][j] = 1
                result = bfs(i, j)

                if len(result) > 1:  # 연합을 이룰 수 있으면
                    wayToGo = True
                    _sum = 0
                    for x, y in result:
                        _sum += population[x][y]  # 연합의 인구 수
                    person_number = _sum // len(result)

                    for x, y in result:
                        population[x][y] = person_number  # 각 칸의 인구 수

                        # 종료 조건 - 연합을 이룰 수 있는 국가가 없으면
    if not wayToGo:
        break

    # 시간 증가
    time += 1

print(time)
