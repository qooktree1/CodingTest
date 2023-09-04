from itertools import combinations


def solution(info, query):
    answer = []
    info_dict = {}
    
    for i in info:
        tmp = i.split()
        choose = tmp[:-1]  # 점수 제외
        score = int(tmp[-1])  # 점수
        
        for j in range(5):
            for c in list(combinations(choose, j)):
                tmp = ''.join(c)
                if tmp in info_dict:  # 점수제외 : [점수] 형식으로 딕셔너리 저장
                    info_dict[tmp].append(score)
                else:
                    info_dict[tmp] = [score]
    
    for value in info_dict.values():  # 점수 기준으로 오름차순
        value.sort()
    
    for q in query:
        qry = q.split()
        qry_choose = qry[:-1]
        qry_score = int(qry[-1])
        
        while 'and' in qry_choose:  # and 제거
            qry_choose.remove('and')
        while '-' in qry_choose:  # - 제거
            qry_choose.remove('-')
        qry_choose = ''.join(qry_choose) 
        
        if qry_choose in info_dict:
            data = info_dict[qry_choose]  # 조건일때 점수들 찾기
            
            # 이분 탐색
            start, end = 0, len(data)
            while start != end:
                if data[(start + end) // 2] >= qry_score:
                    end = (start + end) // 2
                else:
                    start = (start + end) // 2 + 1
            answer.append(len(data) - start)  # 점수 이상인 것만 개수 찾기
                
        else:  # 맞는 조건 없는 경우 0
            answer.append(0)

    return answer

"""
# 효율성 테스트 실패
# 딕셔너리는 마지막 점수를 받지 못함

def solution(info, query):
    n_info = []
    n_query = []
    # 검사하기 알맞은 새로운 배열 추가
    
    for inf in info:
        a, b, c, d, e = inf.split()
        n_info.append([a, b, c, d, e])
    # [["java","backend","junior","pizza","150"],...
    
    
    for qu in query:
        a, b, c, d, e, f, g, h = qu.split()
        n_query.append([a, c, e, g, h])  # and 빼기
    # [["java","backend","junior","pizza","100"],...
    answer = []
    for q in n_query:
        chk = 0
        for i in n_info:
            cnt = 0
            if q[0] == i[0] or q[0] == '-': cnt += 1
            if q[1] == i[1] or q[1] == '-': cnt += 1
            if q[2] == i[2] or q[2] == '-': cnt += 1
            if q[3] == i[3] or q[3] == '-': cnt += 1
            if int(q[4]) <= int(i[4]): cnt += 1
            if cnt == 5:
                chk += 1
        answer.append(chk)
    return answer
"""