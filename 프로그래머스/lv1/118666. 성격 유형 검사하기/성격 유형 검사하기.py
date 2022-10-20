def solution(survey, choices):
    indicators = {
        "R": 0,
        "T": 0,
        "C": 0,
        "F": 0,
        "J": 0,
        "M": 0,
        "A": 0,
        "N": 0,
    }
    for i in range(len(survey)):
        if choices[i] == 1:
            indicators[survey[i][0]] += 3
        elif choices[i] == 2:
            indicators[survey[i][0]] += 2
        elif choices[i] == 3:
            indicators[survey[i][0]] += 1
        elif choices[i] == 5:
            indicators[survey[i][1]] += 1
        elif choices[i] == 6:
            indicators[survey[i][1]] += 2
        elif choices[i] == 7:
            indicators[survey[i][1]] += 3
    
    # 횟수 비교
    t_num = indicators["T"]
    r_num = indicators["R"]
    c_num = indicators["C"]
    f_num = indicators["F"]
    j_num = indicators["J"]
    m_num = indicators["M"]
    a_num = indicators["A"]
    n_num = indicators["N"]
    answer = ""
    
    if t_num > r_num:
        answer += "T"
    elif t_num <= r_num:
        answer += "R"
    
    if c_num >= f_num:
        answer += "C"
    elif c_num < f_num:
        answer += "F"
        
    if j_num >= m_num:
        answer += "J"
    elif j_num < m_num:
        answer += "M"
    
    if a_num >= n_num:
        answer += "A"
    elif a_num < n_num:
        answer += "N"
    return answer