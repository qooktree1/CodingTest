def solution(board, skill):
    answer = 0
    add_board = [[0] * 1001 for _ in range(1001)]

    for _type, r1, c1, r2, c2, degree in skill:
        
        # type이 1이면 minus
        if _type == 1:
            degree = -degree
            
        add_board[r1][c1] += degree
        add_board[r1][c2+1] -= degree  # 범위 마지막은 minus
        add_board[r2+1][c1] -= degree  # 범위 마지막은 minus
        add_board[r2+1][c2+1] += degree
    
    # 누적합
    for i in range(len(add_board)):
        for j in range(1, len(add_board[0])):
            add_board[i][j] += add_board[i][j-1]
    
    for i in range(1, len(add_board)):
        for j in range(len(add_board[0])):
            add_board[i][j] += add_board[i-1][j]
    
    # 기존 배열과 합치기
    for i in range(len(board)):
        for j in range(len(board[0])):
            board[i][j] += add_board[i][j]
            if board[i][j] > 0:
                answer += 1
    
    return answer