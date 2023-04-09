import sys
input = sys.stdin.readline

N = int(input())
len, damage = map(int, input().split())
C = int(input())
arr = [0]
for _ in range(N):
    arr.append(int(input()))

psum = [0] * (N + 1)

for i in range(1, N+1):
    now = psum[i-1] - psum[max(0, i-len)]
    if arr[i] <= now + damage:
        psum[i] = psum[i-1] + damage
    else:
        if C:
            C -= 1
            psum[i] = psum[i-1]
        else:
            print("NO")
            sys.exit()

print("YES")