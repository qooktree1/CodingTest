def check_order(skill, skill_dict):
    check = []  # 순서 확인 배열
    for i in range(len(skill)):
        if skill[i] in skill_dict:
            tmp = skill_dict[skill[i]]
            if not check and tmp != 1: return False  # 스킬의 순서가 1부터 시작하지 않았을 때
            if check and check[-1] != tmp - 1: return False  # 스킬의 순서가 순서대로 나타나지 않았을 때
            check.append(tmp)
    return True


def solution(skill_order, skill_trees):
    ans = 0
    
    # 스킬 순서 딕셔너리 초기화
    skill_dict = dict()
    for i in range(len(skill_order)): skill_dict[skill_order[i]] = i + 1
    
    for skill in skill_trees:
        if check_order(skill, skill_dict): ans += 1
    return ans