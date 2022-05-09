import sys
input = sys.stdin.readline
N = int(input())
n_lst = list(map(int, input().split()))
a_dict = dict()
for i in range(N):
    a_dict[n_lst[i]] = 1

M = int(input())
m_lst = list(map(int, input().split()))

for i in range(M):
    if a_dict.get(m_lst[i], 0):
        print(1)
    else:
        print(0)