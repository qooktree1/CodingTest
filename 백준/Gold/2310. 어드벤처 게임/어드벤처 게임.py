def dfs(num, money):
    global answer, visited

    # 레프리콘 - 소지금 일정양 이하로 떨어지지 않게 채워줌
    if rooms[num][0] == "L" and rooms[num][1] > money:
        money = rooms[num][1]

    # 트롤 - 일정량의 통행료 지불
    elif rooms[num][0] == "T":
        if rooms[num][1] > money:
            return  # 통행료 지불 못하면 BACK
        else:
            money -= rooms[num][1]

    if num == N-1:  # 끝 방까지 가게 되면(종료조건)
        answer = "Yes"
        return

    visited[num] = 1
    for next_num in rooms[num][2]:
        if not visited[next_num-1]:
            dfs(next_num-1, money)
    visited[num] = 0


while 1:
    N = int(input())
    if N == 0:
        break
    rooms = []
    answer = "No"
    visited = [0] * (N+1)
    for _ in range(N):
        room = input().split()
        rooms.append([room[0], int(room[1]), list(map(int, room[2:-1]))])

    dfs(0, 0)  # 방번호, 소지금
    print(answer)
