N = int(input())
student = list(map(int, input().split()))
a = []
for i in range(N):
    a.insert(i - student[i],i+1)

for j in a:
    print(j,end=' ')