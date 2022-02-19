# sheets : 빙고판에 숫자들 추가 | answer : 사회자가 부른 숫자
sheets = [list(map(int, input().split())) for _ in range(5)]
answer = []
def bingo(answer, sheets):
    k = -1
    while True:
        k += 1
        check = 0
        for i in range(5):
            for j in range(5):
                if answer[k] == sheets[i][j]:
                    sheets[i][j] = 0

                    # 행 검사
                    for i in range(5):
                        for j in range(5):
                            if sheets[i][j] > 0:
                                break
                        else:
                            check += 1

                    # 열 검사
                    for i in range(5):
                        sum_ = 0
                        for j in range(5):
                            if sheets[j][i] > 0:
                                break
                        else:
                            check += 1

                    # 대각선 검사(왼 -> 우)
                    for i in range(5):
                        if sheets[i][i] > 0:
                            break
                    else:
                        check += 1

                    # 대각선 검사(우 -> 왼)
                    for i in range(5):
                        if sheets[5 - i - 1][i] > 0:
                            break
                    else:
                        check += 1

                    if check >= 3:
                        return

for i in range(5):
    a, b, c, d, e = map(int, input().split())
    answer.append(a)
    answer.append(b)
    answer.append(c)
    answer.append(d)
    answer.append(e)
bingo(answer, sheets)
zeros = 0
for i in range(5):
    for j in range(5):
        if sheets[i][j] == 0:
            zeros += 1
print(zeros)
