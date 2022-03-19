def solution(record):
    result = []
    name = {}  # 딕셔너리
    for i in record:
        check1 = i.split()
        if check1[0] == 'Enter':
            name[check1[1]] = check1[2]
        elif check1[0] == 'Change':
            name[check1[1]] = check1[2]
    #  name = {'uid1234': 'Prodo', 'uid4567': 'Ryan'}
    
    for i in record:
        check2 = i.split()
        if check2[0] == 'Enter':
            result.append(f'{name[check2[1]]}님이 들어왔습니다.')
        elif check2[0] == 'Leave':
            result.append(f'{name[check2[1]]}님이 나갔습니다.')
    return result