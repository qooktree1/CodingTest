n, bridge_length, bridge_weight = map(int, input().split())
trucks = list(map(int, input().split()))
time = 0  # 최단 시간
bridge = [0] * bridge_length  # 다리


while bridge:
    bridge.pop(0)  # 도로내의 차 이동
    if trucks: # 남아 있는 트럭이 있을 경우
        if sum(bridge) + trucks[0] <= bridge_weight:
            bridge.append(trucks.pop(0))  # 다리에 트럭 추가
        else:
            bridge.append(0)  # 트럭 사이에 빈 공간 추가
    time += 1
print(time)
