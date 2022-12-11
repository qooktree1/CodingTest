def solution(files):
    all_list = []
    head = ""
    number = ""
    tail = ""
    
    # 모든 파일 조사
    for file in files:
        for i in range(len(file)):
            # HEAD 분리
            if file[i].isdecimal():
                head = file[:i]
                tmp = file[i:]
                
                for j in range(len(tmp)):
                    # Number와 TAIL 분리
                    if not tmp[j].isdecimal():
                        tail = tmp[j:]
                        number = tmp[:j]
                        break;
                else:
                    tail = ""
                    number = tmp
                # all_list 배열에 append
                all_list.append([head, number, tail])
                head = ""
                number = ""
                break  # 배열에 append 후 다음 파일 탐색
    
    # Head 부분 사전 순(대소문자 구분 X) --> Number 숫자 순
    all_list.sort(key=lambda x:(x[0].lower(), int(x[1])))
    
    return ["".join(c) for c in all_list]
    
    