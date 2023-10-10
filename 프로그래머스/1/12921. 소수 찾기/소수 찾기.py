# def solution(n):
#     # 에라토스테네스의 체 이용하자!! 가장 효율적
#     a = [False,False] + [True]*(n-1)
#     primes=[]
#     for i in range(2,n+1):
#         if a[i]:
#             primes.append(i)
#             for j in range(2*i, n+1, i):
#                 a[j] = False
    
#     return len(primes)

def solution(n):
    answer = 0
    for i in range(2, n+1):
        for j in range(2, int(i**0.5)+1):
            if i % j == 0:
                break
        else:
            answer += 1
    return answer