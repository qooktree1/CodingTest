# N : 날짜 수 | K : 연속적인 날짜 수
N, K = map(int, input().split())
lst = list(map(int, input().split()))
hab = 0
# 연속적인 수의 부분합
for i in range(K):
    hab += lst[i]
max_sum = hab  # 부분합을 max_sum 에 저장

while i != N - 1:  # index 를 모두 검사할 때까지
    hab -= lst[i - K + 1]  # 이전 값 빼기
    hab += lst[i+1]  # 다음 값 더하기
    if max_sum < hab:  # max_sum 인지 검사
        max_sum = hab
    i += 1
print(max_sum)