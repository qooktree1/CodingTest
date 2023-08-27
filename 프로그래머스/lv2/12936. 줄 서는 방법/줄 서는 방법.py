import math


def solution(n, k):
    # 1 ~ n 번호 매기기(오름차순)
    lst = list(range(1, n + 1))
    answer = []
    for _ in range(n):  # n번째 사람까지 나열
        tmp = lst.pop((k-1) // math.factorial(len(lst) - 1))  # k - 1은 인덱스 맞추기, (n-1)! 로 나눠서 몫의 값을 answer에 넣어줌
        k = k % math.factorial(len(lst))  # k 다시 맞추기
        answer.append(tmp)
    return answer