import sys
input = sys.stdin.readline

N, S = map(int, input().split())
lst = list(map(int, input().split()))
s = e = 0
sum_ = 0
ans = 10000000
while 1:
    # 현재 길이 기록 & 앞 숫자를 뺌
    if sum_ >= S:
        ans = min(ans, e - s)
        sum_ -= lst[s]
        s += 1

    # 끝까지 도달한 다음 앞 숫자를 계속 뺄 수도 있기 때문에 조건 추가
    elif e == N:
        break

    # 뒷 숫자를 더함
    else:
        sum_ += lst[e]
        e += 1

if ans == 10000000:
    print(0)
else:
    print(ans)