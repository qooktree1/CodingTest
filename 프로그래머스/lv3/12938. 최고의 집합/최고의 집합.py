def solution(n, s):
    if s < n:
        return [-1]
    
    # 방법
    # s(총합) // n(개수) 으로 이루어진 n개의 배열에 나머지를 반복문을 통해 더함
    answer = []
    a = s // n
    b = s % n
    answer = [a] * n
    for i in range(b):
        answer[i] += 1
        
    return sorted(answer)