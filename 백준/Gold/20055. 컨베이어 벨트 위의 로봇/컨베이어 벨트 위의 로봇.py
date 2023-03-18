import sys
from collections import deque

n, k = map(int, input().split())
belt = deque(list(map(int, input().split())))
robots = deque([0] * n)
answer = 1

while True:
    # 1 회전
    belt.rotate(1)
    robots.rotate(1)

    robots[-1] = 0  # 내려가는 위치는 로봇 삭제

    # 2  가장 먼저 벨트에 올라간 순서부터 확인
    for i in range(n-2, -1, -1):  # 로봇은 n-2 가 마지막 index
        if robots[i] != 0 and robots[i+1] == 0 and belt[i+1] >= 1:
            belt[i+1] -= 1
            robots[i+1] = robots[i]
            robots[i] = 0
    robots[-1] = 0  # 내리는 위치는 로봇 삭제

    # 3
    if robots[0] == 0 and belt[0] > 0:  # 로봇이 없는 경우 & 벨트 칸의 내구도가 0이 아니라면
        robots[0] = 1  # 로봇 올림
        belt[0] -= 1

    # 4. 종료조건
    if belt.count(0) >= k:
        print(answer)
        break

    answer += 1  # 단계 수행