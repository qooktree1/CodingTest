import sys
input = sys.stdin.readline


n = int(input())
a = list(map(int, input().split()))
x = int(input())
ans = 0
a.sort()
st = 0
end = len(a)-1
while st < end:
    if a[st] + a[end] < x:
        st += 1

    elif a[st] + a[end] > x:
        end -= 1

    elif a[st] + a[end] == x:
        ans += 1
        end -= 1
print(ans)