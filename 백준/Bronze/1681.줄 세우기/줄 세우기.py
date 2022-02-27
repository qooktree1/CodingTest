# N : 학생 수, L : 0 ~ 9 사이의 포함시키고 싶지 않는 숫자
N, L = map(int, input().split())

flag = 0
i = 1
answer = []
while True:
    if len(answer) == N:
        break
    # 1부터 숫자를 늘리며 각 자리의 숫자가 L 인지 확인
    for j in str(i):
        # L 이면 flag = 1
        if L == int(j):
            flag = 1
    # flag = 1 : L이 포함된 숫자이기 때문에 answer 에 저장 X | flag 0으로 초기화
    if flag == 1:
        flag = 0
    # L이 포함된 숫자가 없기 때문에 append
    else:
        answer.append(i)
    i += 1
# 가장 큰 수는 마지막 index
print(answer[-1])