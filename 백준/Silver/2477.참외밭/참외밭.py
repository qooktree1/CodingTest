K = int(input())
lst = [list(map(int, input().split())) for _ in range(6)]
h = []
w = []
m_h = 0
m_w = 0
for i in range(6):
    if lst[i][0] == 4 or lst[i][0] == 3:  # 세로
        if m_h < lst[i][1]:
            m_h = lst[i][1]
    if lst[i][0] == 1 or lst[i][0] == 2:  # 가로
        if m_w < lst[i][1]:
            m_w = lst[i][1]
lst = lst + lst
max_area = m_w * m_h  # 가장 큰 두변을 곱한 area
sub_area = 0  # 오목하게 들어가 있는 area
for i in range(6):
    if lst[i][0] == lst[i+2][0] and lst[i+1][0] == lst[i+3][0]:
        sub_area = lst[i+1][1] * lst[i+2][1]
result = max_area - sub_area
print(result * K)