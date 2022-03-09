N = int(input())
answer = 0
for test_case in range(N):
    S = input()
    if len(S) <= 2:
        answer += 1
        continue
    for i in range(len(S)):
        if S[i] in S[:i] and S[i] != S[i-1]:
            break
    else:
        answer += 1

print(answer)