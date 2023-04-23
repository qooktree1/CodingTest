def solution(prices):
    stack = []
    for i in range(len(prices)-1):
        second = 0
        for j in range(i, len(prices)-1):
            if (prices[i] <= prices[j]): second += 1
            else: break
        stack.append(second)
    stack.append(0)
    return stack