import sys
A, B = map(int, input().split())
left = right = 0
while 1:
    if A == 1:
        right += B - 1
        break
    elif B == 1:
        left += A - 1
        break
    if A < B:
        right += B // A
        B = B % A
    else:
        left += A // B
        A = A % B
print(left, right)