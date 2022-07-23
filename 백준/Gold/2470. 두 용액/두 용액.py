import sys
input = sys.stdin.readline
N = int(input())
lst = list(map(int, input().split()))
lst.sort()
start = 0
end = len(lst) - 1
min_abs = float('inf')
ans = [0, 0]
while start < end:
    sum_ = lst[start] + lst[end]
    if abs(sum_) < min_abs:
        min_abs = abs(sum_)
        ans[0] = lst[start]
        ans[1] = lst[end]
    if lst[start] + lst[end] < 0:
        start += 1
    else:
        end -= 1
print(*ans)