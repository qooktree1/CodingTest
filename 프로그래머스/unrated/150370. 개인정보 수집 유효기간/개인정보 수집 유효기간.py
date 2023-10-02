def createTermDict(terms):
    tmpDict = dict()
    for term in terms:
        [term_type, month] = term.split(" ")
        tmpDict[term_type] = int(month)
    return tmpDict


def solution(today, terms, privacies):
    ans = []
    [cur_year, cur_month, cur_day] = map(int, today.split("."))
    termDict = createTermDict(terms)  # term 딕셔너리 만들기
    
    for index, privacy in enumerate(privacies):
        [date, term_type] = privacy.split(" ")
        [year, month, day] = map(int, date.split("."))
        month += termDict[term_type]
        day -= 1
        while month > 12:
            year += 1
            month -= 12
        
        date_sum = year * 12 * 28 + month * 28 + day
        cur_date_sum = cur_year * 12 * 28 + cur_month * 28 + cur_day
        if date_sum < cur_date_sum:
            ans.append(index + 1)
    
    return ans