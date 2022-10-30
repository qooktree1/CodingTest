from string import ascii_uppercase
def solution(msg):
    _dict = {}
    index = 1
    answer = []
    # 1. 사전 초기화
    for i in ascii_uppercase:
        _dict[i] = index
        index += 1
    
    start, end = 0, 0
    while 1:
        end += 1
        if end == len(msg):  # 종료
            answer.append(_dict[msg[start:end]])
            return answer
        
        print(msg[start:end+1])
        if not _dict.get(msg[start:end+1]):
            _dict[msg[start:end+1]] = index
            index += 1
            answer.append(_dict[msg[start:end]])
            start = end