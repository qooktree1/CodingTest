def inorder(lst, depth):

    # 노드가 존재할 시
    if len(lst) > 0:
        mid = len(lst) // 2  # 중앙 값 찾기
        inorder(lst[:mid], depth+1) # 왼쪽 트리
        ans[depth].append(lst[mid])  # 현재 트리 기록
        inorder(lst[mid+1:], depth+1)  # 오른쪽 트리


K = int(input())
building = list(map(int, input().split()))
ans = [[] for _ in range(K)]  # 주어진 깊이만큼 트리 배열 초기화
inorder(building, 0)
for a in ans:
    print(*a)