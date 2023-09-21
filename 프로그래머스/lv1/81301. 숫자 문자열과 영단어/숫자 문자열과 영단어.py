def solution(s):
    answer = ""
    words={'zero':'0','one':'1','two':'2','three':'3','four':'4','five':'5','six':'6','seven':'7','eight':'8','nine':'9'}
    word=""
    
    for i in s:  #  전체 문자열에서 한 문자씩
        # 숫자면
        if i.isnumeric():
            answer+=i
            continue
        word+=i  # 한 글자씩 word에 추가
        if word in words:  # 단어가 words 딕셔너리에 있으면
            answer+=words[word]  # 해당하는 value 값을 answer 에 추가
            word=""  # word 를 초기화
    return int(answer)  # 숫자 int 형으로 return