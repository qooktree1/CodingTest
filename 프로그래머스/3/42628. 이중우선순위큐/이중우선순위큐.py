import heapq


def solution(operations):
    arr = []
    heapq.heapify(arr)
    for operation in operations:
        [mode, num] = operation.split(' ')
        if mode == "I": heapq.heappush(arr, int(num))
        elif len(arr) > 0:
            if num == '-1': heapq.heappop(arr)
            else: arr.remove(max(arr))
    arr.sort()
    if len(arr): return [arr[-1], arr[0]]
    return [0, 0]