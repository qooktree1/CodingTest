T = int(input())
for _ in range(1, T + 1):
    N = int(input())
    lst = list(map(int, input().split()))
    print(sum(lst))