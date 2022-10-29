def solution(str1, str2):
    tmp1 = []
    tmp2 = []
    
    # 대소문자 무시하기 위해 모두 대문자로~
    str2 = str2.upper()
    str1 = str1.upper()
    
    # 2문자씩 만약 영문자로 된 글자 쌍이면 tmp에 append
    for i in range(len(str1)-1):
        if str1[i].isalpha() and str1[i+1].isalpha():
            tmp1.append(str1[i] + str1[i+1])

    for i in range(len(str2)-1):
        if str2[i].isalpha() and str2[i+1].isalpha():
            tmp2.append(str2[i] + str2[i+1])
    
    
    # 자카드 유사도 구하기
    # 길이가 작은 값을 tmp1 으로~~
    if len(tmp1) > len(tmp2):
        tmp1, tmp2 = tmp2, tmp1
        
    
    # 교집합 구하기
    cnt = 0
    visited = [0] * len(tmp2)
    for i in range(len(tmp1)):
        for j in range(len(tmp2)):
            # 원소가 같고 방문하지 않았을때 count 함
            if tmp1[i] == tmp2[j] and not visited[j]:
                cnt += 1
                visited[j] = 1  # tmp2 의 방문 표시
                break  # 다음 tmp1 의 원소를 검색하기 위해
    
    A = cnt  # 교집합
    
    
    # 합집합 구하기
    B = len(tmp1) + len(tmp2) - A
    
    
    if not B:  # 합집합이 공집합일때
        return 65536
    
    ans = int((A/B) * 65536)
    return ans