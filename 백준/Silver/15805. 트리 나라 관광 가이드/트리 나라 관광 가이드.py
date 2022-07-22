import sys
N = int(input())
n_list = list(map(int, input().split()))
K = len(set(n_list))  # 도시의 총 개수
answer = [-2] * K
answer[n_list[0]] = -1  # 루트 노드
for i in range(1, N):
    if answer[n_list[i]] == -2:
        answer[n_list[i]] = n_list[i-1]

print(K)
print(*answer)