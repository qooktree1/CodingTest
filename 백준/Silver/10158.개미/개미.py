# w : 가로길이, h : 세로길이
# p, q : 좌표값
# t : 개미가 움질일 시간
w, h = map(int, input().split())  # w : 가로 | h : 세로
p, q = map(int, input().split())  # x, y 좌표
t = int(input())  # t : 시간 1번 움직일떄 1 증가
i = j = 1  # 좌표가 격자 공간 안에 있으므로 1 을 더함
# x, y 좌표에 t 시간만큼 이동한 거리를 더하자
# 격자 공간을 얼마나 추가할지 계산함
i += (p+t) // w
j += (q+t) // h

# 계산한 결과가 홀수 일때는
if i % 2 == 1:  # 홀수
    x = (p + t) % w
else:
    x = w - (p + t) % w
if j % 2 == 1:  # 홀수
    y = (q + t) % h
else:
    y = h - (q + t) % h
print(x, y)