import sys
A, B = input().split()

min_len = 1000000
for i in range(len(B) - len(A) + 1):
    cnt = 0
    for j in range(len(A)):
        # 같지 않은 경우 차이 증가
        if A[j] != B[i + j]:
            cnt += 1
    min_len = min(cnt, min_len)

print(min_len)