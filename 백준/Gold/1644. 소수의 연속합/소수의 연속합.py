import sys


N = int(input())
prime = []
# 소수 만들기
# 에라토스테네스의 체
check = [True] * (N+1)
for i in range(2, int(N**(1/2)) + 1):
    if check[i]:  # 소수인 경우

        # i 이후의 i의 배수들을 False로
        for j in range(i+i, N + 1, i):
            check[j] = False
for i in range(2, N+1):
    if check[i]:
        prime.append(i)

# 투 포인터
s = e = ans = sum_ = 0
while 1:
    if sum_ == N:
        ans += 1

    if sum_ > N:
        sum_ -= prime[s]
        s += 1

    elif e == len(prime):
        break

    else:
        sum_ += prime[e]
        e += 1
print(ans)