from itertools import combinations
def solution(orders, course):
    result = []
    # 요리의 개수마다 조합을 만듦
    for c in course:
        line = []
        for order in orders:
            # XY == YX ->  따라서 정렬
            line.extend(list(map(''.join, combinations(sorted(order), c))))
        # 딕셔너리 형태로 각 요리당 주문된 횟수 추가
        counts = dict()
        for k in range(len(line)):
            if line[k] not in counts:
                counts[line[k]] = 1
            else:
                counts[line[k]] += 1


        for key, value in counts.items():
            # 2개 이상 주문해야하고 가장 많은 횟수의 주문횟수를 가짐
            if value >= 2 and max(counts.values()) == value:
                result.append(key)

    result.sort()
    return result