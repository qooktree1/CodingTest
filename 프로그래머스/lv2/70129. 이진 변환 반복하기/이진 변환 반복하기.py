def solution(s):
    convert_cnt = zero_cnt = 0
    while 1:
        convert_cnt += 1
        origin = len(s)
        s = len(s.replace("0", ""))
        zero_cnt += origin - s
        
        
        s = format(int(s), "b")
        
        if s == "1":
            return [convert_cnt, zero_cnt]