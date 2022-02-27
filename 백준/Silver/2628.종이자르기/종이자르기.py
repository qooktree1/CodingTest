def bubble(lst):
    for i in range(len(lst) - 1, 0, -1):
        for j in range(i):
            if lst[j] > lst[j + 1]:
                lst[j], lst[j + 1] = lst[j + 1], lst[j]
    return lst
# N, M : 종이의 가로 세로
N, M = map(int, input().split())
# 종이 전체 1로 채우기
paper = [[0] * N for _ in range(M)]

# 종이 자르기
r_slice = [0]
c_slice = [0]
for _ in range(int(input())):
    rc, line = map(int, input().split())
    if rc == 0:
        r_slice.append(line)
    elif rc == 1:
        c_slice.append(line)
r_slice.append(M)
c_slice.append(N)
bubble(r_slice)
bubble(c_slice)
max_r = 0
max_c = 0
for i in range(len(r_slice) - 1):
    if max_r < r_slice[i + 1] - r_slice[i]:
        max_r = r_slice[i + 1] - r_slice[i]

for j in range(len(c_slice) - 1):
    if max_c < c_slice[j + 1] - c_slice[j]:
        max_c = c_slice[j + 1] - c_slice[j]

print(max_r * max_c)