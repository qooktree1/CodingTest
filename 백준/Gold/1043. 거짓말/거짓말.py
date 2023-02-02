N, M = map(int, input().split())

# 합집합을 사용하기 위해 set 사용
true_people = set(input().split()[1:])
parties = [set(input().split()[1:]) for _ in range(M)]

# 진실을 아는 사람이 없는 경우
if len(true_people) == 0:
    print(len(parties))

# 진실을 아는 사람이 있는 경우
else:
    for _ in range(M):  # 파티의 수 만큼 반복
        for party in parties:
            if party & true_people:
                true_people = true_people.union(party)  # 합집합

    ans = 0  # 출석할 수 있는 파티 개수
    for party in parties:
        if party & true_people:
            continue
        ans += 1

    print(ans)
