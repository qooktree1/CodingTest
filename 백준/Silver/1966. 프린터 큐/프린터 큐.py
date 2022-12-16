from collections import deque
T = int(input())
for tc in range(T):
    N, M = map(int, input().split())
    n_list = list(map(int, input().split()))
    n_list = [[n_list[i], i] for i in range(N)]
    n_list = deque(n_list)
    answer = 0
    while len(n_list):
        max_num = max(n_list)[0]
        a = n_list.popleft()
        if a[0] == max_num:
            answer += 1
            if a[1] == M:
                print(answer)
                break
        else:
            n_list.append(a)
