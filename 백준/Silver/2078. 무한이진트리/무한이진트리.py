import sys
A, B = map(int, input().split())
left = right = 0
while 1:
    # A: 1, B: 3일때
    if A == 1:
        right += B - 1
        break
    # A: 3, B: 1일때
    elif B == 1:
        left += A - 1
        break
    if A < B:
        # 11 4일때 오른쪽 이동을 2번 B는 3으로 바뀐다.
        right += B // A
        B = B % A
    else:
        left += A // B
        A = A % B
print(left, right)