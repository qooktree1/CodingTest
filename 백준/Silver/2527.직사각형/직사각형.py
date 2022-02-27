for x in range(4):
    x1, y1, x2, y2, p1, q1, p2, q2 = map(int, input().split())
    # 모든 경우에 들어가지 않을 경우 : a
    answer = 'a'
    # 완전히 분리된 경우
    if x1 > p2 or x2 < p1 or y1 > q2 or y2 < q1:
        answer = 'd'
    # b, c 구별
    else:
        # 오른쪽 검사 (x 기준)
        if p1 == x2:
            if q2 == y1 or q1 == y2:
                answer = 'c'
            else:
                answer = 'b'
        # 왼쪽 검사 (x 기준)
        if p2 == x1:
            if y1 == q2 or q1 == y2:
                answer = 'c'
            else:
                answer = 'b'
        # 오른쪽 검사 (y 기준)
        if q2 == y1:
            if p1 == x2 or p2 == x1:
                answer = 'c'
            else:
                answer = 'b'
        # 왼쪽 검사 (y 기준)
        if q1 == y2:
            if p1 == x2 or p2 == x1:
                answer = 'c'
            else:
                answer = 'b'
    print(answer)