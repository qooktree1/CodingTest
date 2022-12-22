from collections import deque
gear_state = [deque(map(int, input())) for _ in range(4)]
K = int(input())
rotate_info = [list(map(int, input().split())) for _ in range(K)]

# 톱니바퀴 맞닿는 부분
# 톱니바퀴 1 - 2번째 인덱스
# 톱니바퀴 2 - 2번째 인덱스, 6번째 인덱스
# 톱니바퀴 3 - 2번째 인덱스, 6번째 인덱스
# 톱니바퀴 4 - 6번째 인덱스
for number, dir in rotate_info:
    direction = dir
    number -= 1
    left_gear = gear_state[number][6]
    right_gear = gear_state[number][2]
    gear_state[number].rotate(dir)  # 첫 톱니바퀴 회전

    # 오른쪽 방향 탐색
    for i in range(number+1, 4):
        if gear_state[i][6] == right_gear:
            break
        else:
            direction *= -1
            right_gear = gear_state[i][2]
            gear_state[i].rotate(direction)

    direction = dir  # 방향이 반전되므로 원래의 회전을 가짐
    # 왼쪽 방향 탐색
    for i in range(number-1, -1, -1):
        if gear_state[i][2] == left_gear:
            break
        else:
            direction *= -1
            left_gear = gear_state[i][6]
            gear_state[i].rotate(direction)

answer = 0

for i in range(4):
    # S 극이면
    if gear_state[i][0] == 1:
        answer += 2 ** i
print(answer)
