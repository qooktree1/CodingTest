def solution(dots):
    answer = 0
    ans1 = (dots[0][0]-dots[1][0])/(dots[0][1]-dots[1][1])
    ans2 = (dots[2][0]-dots[3][0])/(dots[2][1]-dots[3][1])
    ans3 = (dots[0][0]-dots[2][0])/(dots[0][1]-dots[2][1])
    ans4 = (dots[1][0]-dots[3][0])/(dots[1][1]-dots[3][1])
    
    if ans1 == ans2 or ans3 == ans4 :
        return 1
    return 0