# 첫 번째 수
N = int(input())
first = N
max_count = 0
for i in range(N + 1):
    num_list = []
    num_list.append(first)
    num_list.append(i)
    idx = 0
    num_count = 2
    while num_list[idx] - num_list[idx + 1] >= 0:
        num_list.append(num_list[idx] - num_list[idx + 1])
        idx += 1
        num_count += 1
    if max_count < num_count:
        max_count = num_count
        answer = num_list
print(max_count)
for n in answer:
    print(n,end=' ')