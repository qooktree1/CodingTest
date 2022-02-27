def bubblesort(l):
    for i in range(len(l)-1, 0, -1):
        for j in range(i):
            if l[j] < l[j + 1]:
                l[j], l[j + 1] = l[j + 1], l[j]
    return l
# N : 총 라운드 수
N = int(input())

# a: A의 카드들 | b : B의 카드들
a = []
b = []

for n in range(N * 2):
    x = list(map(int, input().split()))
    if n % 2 == 0:
        tmp = bubblesort(x[1:])
        a.append(tmp)
    else:
        tmp = bubblesort(x[1:])
        b.append(tmp)

for i in range(N):
    is_same = 0

    if len(a[i]) > len(b[i]):
        for _ in range(len(a[i]) - len(b[i])):
            b[i].append(0)
    elif len(a[i]) < len(b[i]):
        for _ in range(len(b[i]) - len(a[i])):
            a[i].append(0)

    for j in range(len(a[i])):
        if a[i][j] > b[i][j]:
            print('A')
            is_same += 1
            break
        elif a[i][j] < b[i][j]:
            print('B')
            is_same += 1
            break
    if is_same == 0:
        print('D')
