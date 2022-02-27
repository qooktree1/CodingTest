w, h = map(int, input().split())  # w, h : 블록의 가로와 세로 길이
mart = int(input())  # mart : 상점의 개수
# 1 : 북쪽, 2 : 남쪽, 3 : 서쪽, 4 : 동쪽
# 1, 2 : 블록의 왼쪽 경계로부터의 거리
# 3, 4 : 블록의 위쪽 경계로부터의 거리
spot = [list(map(int, input().split())) for _ in range(mart)]
# d : 동근' s spot
d_d, d_l = list(map(int, input().split()))
answer = 0
for i in range(len(spot)):
    # m_d : 마트 방향, m_l 경계로부터의 거리
    m_d, m_l = spot[i]

    if d_d == 1:
        if m_d == 1:
            answer += abs(d_l - m_l)
        elif m_d == 2:
            if (d_l + m_l + h) > ((w - d_l) + (w - m_l) + h):
                answer += (w - d_l) + (w - m_l) + h
            else:
                answer += d_l + m_l + h
        elif m_d == 3:
            answer += m_l + d_l
        elif m_d == 4:
            answer += (w - d_l) + m_l
    elif d_d == 2:
        if m_d == 1:
            if (m_l + d_l + h) > ((w - d_l) + (w - m_l) + h):
                answer += (w - d_l) + (w - m_l) + h
            else:
                answer += d_l + m_l + h
        elif m_d == 2:
            answer += abs(d_l - m_l)
        elif m_d == 3:
            answer += d_l + (h - m_l)
        elif m_d == 4:
            answer += (w - d_l) + (h - m_l)
    elif d_d == 3:
        if m_d == 1:
            answer += m_l + d_l
        elif m_d == 2:
            answer += (h - d_l) + m_l
        elif m_d == 3:
            answer += abs(d_l - m_l)
        elif m_d == 4:
            if (m_l + d_l + w) > ((h - m_l) + w + (h - d_l)):
                answer += (h - m_l) + w + (h - d_l)
            else:
                answer += m_l + d_l + w
    elif d_d == 4:
        if m_d == 1:
            answer += d_l + (w - m_l)
        elif m_d == 2:
            answer += (h - d_l) + (w - m_l)
        elif m_d == 3:
            if (d_l + w + m_l) > ((h - d_l) + w + (h - m_l)):
                answer += (h - d_l) + w + (h - m_l)
            else:
                answer += d_l + w + m_l
        elif m_d == 4:
            answer += abs(m_l - d_l)
print(answer)