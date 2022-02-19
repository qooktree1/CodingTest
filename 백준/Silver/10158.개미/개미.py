# w : 가로길이, h : 세로길이
# p, q : 좌표값
# t : 개미가 움질일 시간
w, h = map(int, input().split())  # w : 가로 | h : 세로
p, q = map(int, input().split())  # x, y 좌표
t = int(input())  # t : 시간 1번 움직일떄 1 증가
i = j = 1
# x, y 좌표에 t 시간만큼 이동한 거리를 더하자
"""
while p + t > w * i:
    i += 1
while q + t > h * j:
    j += 1
"""
i += (p+t) // w
j += (q+t) // h
if i % 2 == 1:  # 홀수
    x = ((p + t) % w) % w
else:
    x = w - (p + t) % w
if j % 2 == 1:  # 홀수
    y = ((q + t) % h) % h
else:
    y = h - (q + t) % h
print(x, y)
"""
ex) 8 시간
x 오른쪽 이동 until 벽에 부딪힐때까지
 -> 벽에 부딪히면 다시 오른쪽 이동
 w : 6, h : 4 일때
(p, q) = (4, 1) 이고 t = 8 이면
<p 변화량>
4 -> 5 -> 6 -> 5 -> 4 -> 3 -> 2 -> 1 -> 0
p result : 0
<q 변화량>
1 -> 2 -> 3 -> 4 -> 3 -> 2 -> 1 -> 0 -> 1
q result : 1
result = (0, 1)
"""
"""
# 시간초과
flag_x = 0
flag_y = 0
for i in range(t):
    if flag_x == 0:
        if p == w:
            flag_x = 1
            p -= 1
        else:
            p += 1
    elif flag_x == 1:
        if p == 0:
            flag_x = 0
            p += 1
        else:
            p -= 1
    if flag_y == 0:
        if q == h:
            flag_y = 1
            q -= 1
        else:
            q += 1
    elif flag_y == 1:
        if q == 0:
            flag_y = 0
            q += 1
        else:
            q -= 1
print(p, q)
"""