N = int(input())
cars = list(map(int, input().split()))
cnt = 0
for i in range(len(cars)):
    if N == cars[i] % 10:
        cnt += 1
print(cnt)