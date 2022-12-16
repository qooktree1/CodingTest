from collections import deque
# 뱀 시작 지점
x, y = 0, 0

# 방향 전환 오른쪽, 아래, 왼쪽, 위
dx = [0, 1, 0, -1]
dy = [1, 0, -1, 0]
d = 0  # 현재 방향

N = int(input())  # 보드 크기
K = int(input())  # 사과 개수

board = [[0] * N for _ in range(N)]  # 보드 초기화

# 사과 위치
for _ in range(K):
    apple_x, apple_y = map(int, input().split())
    board[apple_x - 1][apple_y - 1] = 2  # 사과 == 2

L = int(input())  # 뱀의 방향 변환 횟수

# 방향 변환 정보
# 첫번째 인자: 초, 두번째 인자: [L: 왼쪽 90도, D: 오른쪽 90도]
information = deque([list(map(str, input().split())) for _ in range(L)])

game_time = 0  # 게임 몇 초 진행되었는지 count
board[x][y] = 1  # 뱀이 차지하고 있는 칸
snake_tail = deque([[0, 0]])  # 뱀의 꼬리

# 게임 시작
while 1:
    game_time += 1  # 게임 진행 시간

    # 다음 위치
    x += dx[d]
    y += dy[d]

    # 보드안에 있고 뱀의 꼬리와 부딪치지 않을때
    if 0 <= x < N and 0 <= y < N and board[x][y] != 1:

        if board[x][y] == 2:
            board[x][y] = 1  # 뱀의 길이 증가
            snake_tail.append([x, y])  # 뱀의 이동 경로 기록

        # 만약 이동한 칸에 사과가 없으면
        if board[x][y] == 0:
            board[x][y] = 1  # 뱀의 길이 증가
            snake_tail.append([x, y])  # 뱀의 이동 경로 기록
            # 꼬리 없애기
            old_x, old_y = snake_tail.popleft()
            board[old_x][old_y] = 0

        # 시간
        # 시간
        # 시간 정보가 있고 방향을 바꿀 시간이 되었다면
        if information and int(information[0][0]) <= game_time:

            # 왼쪽 방향 회전
            if information[0][1] == "L":
                if d == 0:
                    d = 3
                else:
                    d -= 1
            # 오른쪽 방향 회전
            else:
                if d == 3:
                    d = 0
                else:
                    d += 1
            information.popleft()

    # 종료 조건
    else:
        break

print(game_time)
