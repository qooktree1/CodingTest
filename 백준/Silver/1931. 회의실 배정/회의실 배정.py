import sys

input = sys.stdin.readline
N = int(input())

room = []
for _ in range(N):
    s, e = map(int, input().split())
    room.append([s, e])

# 뒤의 숫자 기준으로 정렬
room.sort(key=lambda x: (x[1], x[0]))

# 첫번째 기준값 정하기
check = room[0][1]

# 방 첫 방문
visit_count = 1

# 첫 방문을 제외한 회의 수 만큼 반복
for i in range(1, N):

    # 기준값(끝난 시간) 과 다음 시작시간을 비교
    if room[i][0] >= check:
        visit_count += 1  # 방문 횟수 증가
        check = room[i][1]  # 끝난 시간을 바꿈

print(visit_count)