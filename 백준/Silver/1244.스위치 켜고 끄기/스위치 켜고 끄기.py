# 스위치 change
def change(a):
    if switch[a] == 0:
        switch[a] = 1
    else:
        switch[a] = 0
    return


# S : 스위치 개수
S = int(input())
switch = list(map(int, input().split()))
# student : 학생 수
student = int(input())
boy = []
girl = []
for _ in range(student):
    # 학생의 성별 : 0번 index, 학생이 받은 수 : 1번 index
    lst = list(map(int, input().split()))

    # 남학생의 경우
    if lst[0] == 1:
        # lst[1] - 1 : 2번째 인덱스 when 3
        for i in range(lst[1] - 1, S, lst[1]):
            change(i)
    # 여학생의 경우
    else:
        # 위치 옮기기 전 인덱스
        change(lst[1]-1)
        k = 1
        # 받은 수에서 양쪽 검사
        while 0 <= lst[1] - 1 - k < S and 0 <= lst[1] - 1 + k < S:
            if switch[lst[1] - 1 - k] == switch[lst[1] - 1 + k]:
                change(lst[1] - 1 - k)
                change(lst[1] - 1 + k)
                k += 1
            else:
                break

for i in range(len(switch)):
    if i % 20 == 0 and i > 0:
        print()
    print(switch[i], end=' ')