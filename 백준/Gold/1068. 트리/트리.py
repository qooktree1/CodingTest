def dfs(x):
    for i in tree[x]:
        dfs(i)
    tree[x] = 'deleted'


N = int(input())
lst = list(map(int, input().split()))
tree = [[] for _ in range(N)]
erase = int(input())

for i in range(N):
    if lst[i] == -1:  # 부모가 없으면 넘어감
        continue
    tree[lst[i]].append(i)  # 그래프 그리기

answer = 0

# 지울 노드의 자식들을 모두 deleted 처리함
dfs(erase)

# 제거해야할 노드
try:
    tree[lst[erase]].remove(erase)
except:
    pass

# print(tree)  # [[1, 2], [], [3, 4], [], [], [], [], [], []]
ans = 0
for i in tree:
    if not i:
        ans += 1
print(ans)