def bubblesort(lst):
    for i in range(len(lst)-1, 0, -1):
        for j in range(i):
            if lst[j][0] > lst[j+1][0]:
                lst[j][0], lst[j+1][0] = lst[j+1][0], lst[j][0]
                lst[j][1], lst[j+1][1] = lst[j+1][1], lst[j][1]
    return lst
# N : 기둥의 개수
N = int(input())
boxes = [list(map(int, input().split())) for _ in range(N)]
bubblesort(boxes)
cal_h = []  # 면적을 구할때 y축 좌표들이 들어갈 list

max_h = 0
max_idx = 0
area = 0
max_h_lst = []
for i in range(len(boxes)):
    if max_h < boxes[i][1]:
        max_h = boxes[i][1]  # 가장 큰 box 의 높이
        max_idx = boxes[i][0]  # 가장 큰 box 의 index
# 가장 높이가 큰 box 의 인덱스를 max_h_lst 에 append
for j in range(len(boxes)):
    if max_h == boxes[j][1]:
        max_h_lst.append(boxes[j][0])
area += (max_h_lst[-1] + 1 - max_h_lst[0]) * max_h
st_w = boxes[0][0]
st_h = boxes[0][1]
for box in boxes:  # 왼쪽에서 가장 큰 box 까지
    if box[0] > max_idx:
        break
    else:
        if st_h < box[1]:
            area += (box[0] - st_w) * st_h
            st_w = box[0]
            st_h = box[1]

st_w = boxes[-1][0]
st_h = boxes[-1][1]
boxes = boxes[::-1]
for box in boxes:  # 오른쪽에서 가장 큰 box 까지
    if box[0] < max_idx:
        break
    else:
        if st_h < box[1]:
            area += (st_w - box[0]) * st_h
            st_w = box[0]
            st_h = box[1]
print(area)