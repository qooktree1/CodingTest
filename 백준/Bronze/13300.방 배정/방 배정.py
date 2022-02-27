# N : 학생 수 , K : 방 최대 인원 수
N, K = map(int, input().split())
room = [[0] * 2 for _ in range(6)]
for _ in range(N):
    # S : 성별 , Y : 학년
    # 0 : 여, 1 : 남
    S, Y = map(int, input().split())
    room[Y - 1][S] += 1
cnt = 0
for i in range(6):
    for j in range(2):
        # 최대 인원을 넘지 않은 선에서 학생들이 있으면 cnt++
        if 0 < room[i][j] <= K:
            cnt += 1
        # 최대 인원을 넘어간 경우 2가지 case 로 분류
        elif room[i][j] > K:
            # 나누어 떨어질 경우
            if room[i][j] % K == 0:
                cnt += room[i][j] // K
            # 나누어 떨어지지 않을 경우 방 추가
            else:
                cnt += room[i][j] // K + 1
print(cnt)