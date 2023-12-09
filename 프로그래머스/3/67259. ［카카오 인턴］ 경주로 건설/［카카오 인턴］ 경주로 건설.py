from collections import deque

# 상하좌우
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]
direct = [0, 1, 2, 3]
result = []

def bfs(board):
    sx = sy = 0  # 시작점
    q = deque([[sx, sy, -1]])  # -> 방향을 -1로 잡음
    N = len(board)
    visited = [[[float('inf')] * 4 for _ in range(N)] for _ in range(N)]
    visited[0][0][0] = visited[0][0][1] = visited[0][0][2] = visited[0][0][3] = 0  # 시작지점 0으로 초기화
    while q:
        x, y, d = q.popleft()

        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            nd = direct[i]
            if 0 <= nx < N and 0 <= ny < N and not board[nx][ny]:
                change = 100
                if d != nd:  # 방향 바뀌면 500 추가
                    change += 500

                # 다익스트라
                if visited[nx][ny][nd] > visited[x][y][d] + change:
                    visited[nx][ny][nd] = visited[x][y][d] + change
                    q.append([nx, ny, nd])
    return visited

def solution(board):
    ans = bfs(board)
    N = len(board)
    return min(ans[N-1][N-1]) - 500  # 처음에 방향을 -1로 잡았기 때문에 방향이동 500을 뺌