N = int(input())
a = list(map(int, input().split()))
b = list(map(int, input().split()))
a.sort()
b.sort(reverse=True)
sum_ = 0
for i in range(N):
    sum_ += a[i] * b[i]
print(sum_)