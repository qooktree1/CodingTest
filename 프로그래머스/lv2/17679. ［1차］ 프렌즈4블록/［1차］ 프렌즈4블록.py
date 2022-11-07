def solution(m, n, board):
    answer = 0
    for i in range(len(board)):
        board[i] = list(board[i])
    while True:
        check = [[0] * n for _ in range(m)]

        for i in range(m-1):
            for j in range(n-1):
								# 배열에 원소가 있고 검사하는 지점으로 정사각형 범위의 원소들이 모두 같으면
                if board[i][j] and board[i][j] == board[i+1][j+1] == board[i+1][j] == board[i][j+1]:
										# 검사할 배열을 모두 1로
                    check[i][j] = check[i][j+1] = check[i+1][j] = check[i+1][j+1] = 1


        # 지워진 블록 세기
        cnt = 0
        for i in range(m):
            for j in range(n):
                if check[i][j]:
                    cnt += 1

        if cnt == 0:  # 종료 조건 - 지워진 블록이 없으면
            return answer
        answer += cnt

        #지워진 블록에 블록 채우기
        for i in range(m-1, -1, -1):  # 밑에서부터
            for j in range(n):

                # 지워야 블럭일 경우
                if check[i][j] == 1:
                    x = i-1

                    # 지우지 말아야할 블럭이 보이거나 끝까지 도달할때까지 위로 이동
                    while x >= 0 and check[x][j] == 1:
                        x -= 1

                    # x == -1 일 경우 검사시작했던 board 배열의 원소를 0으로
                    if x < 0:
                        board[i][j] = 0

                    else:
                        board[i][j], board[x][j] = board[x][j], board[i][j]  # 검사 시작한 블럭과 위치 바꾸기
                        check[x][j] = 1  # 검사 종료한 위치는 지워야할 블럭이 되므로 다시 1로 설정