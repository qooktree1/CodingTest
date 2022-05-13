import sys
input = sys.stdin.readline


g, s = map(int, input().split())
W = input()
S = input()

g_dict = dict()
s_dict = dict()
for i in range(g):
    # 있으면 존재하는 값 + 1, 없으면 +1
    g_dict[W[i]] = g_dict.get(W[i], 0) + 1
    s_dict[S[i]] = s_dict.get(S[i], 0) + 1
if s == g and s_dict == g_dict:
    print(1)
else:

    cnt = 0
    for i in range(s-g+1):
        if g_dict == s_dict:
            cnt += 1

        if i == s-g:
            
            break
        # 맨 앞의 문자 딕셔너리 빼기
        s_dict[S[i]] -= 1
        if s_dict[S[i]] == 0:
            del s_dict[S[i]]  # value 가 0이면 del

        # 다음 문자 딕셔너리 더하기
        s_dict[S[i+g]] = s_dict.get(S[i+g], 0) + 1

    print(cnt)