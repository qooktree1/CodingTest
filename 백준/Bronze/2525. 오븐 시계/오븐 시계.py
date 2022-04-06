# A : 시, B : 분
# C: 요리하는데 필요한 시간
A, B = map(int, input().split())
C = int(input())

if B + C >= 60:
    tmp_A = (B + C) // 60
    tmp_B = (B + C) % 60
    A += tmp_A
    B = tmp_B
    C = 0
else:
    B += C
if A >= 24:
    A = A - 24
print(A, B)