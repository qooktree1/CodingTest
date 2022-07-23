import sys
input = sys.stdin.readline
sys.setrecursionlimit(10 ** 6)


# 트리의 가장 끝 점 찾기
def find_end(x):
    global end
    if x != -1:
        find_end(tree[x][0])
        end = x
        find_end(tree[x][1])


def inorder(x):
    global cnt


    if tree[x][0] != -1 and not visited[tree[x][0]]:
        cnt += 1
        visited[tree[x][0]] = 1
        inorder(tree[x][0])

    elif tree[x][1] != -1 and not visited[tree[x][1]]:
        cnt += 1
        visited[tree[x][1]] = 1
        inorder(tree[x][1])

    elif x == end:
        return

    # 부모
    elif parent[x]:
        cnt += 1
        inorder(parent[x])


N = int(input())
tree = dict()
parent = [0] * (N+1)
for _ in range(N):
    a, b, c = map(int, input().split())
    tree[a] = [b, c]
    if b != -1:
        parent[b] = a
    if c != -1:
        parent[c] = a
visited = [0] * (N+1)
cnt = 0
find_end(1)
visited[1] = 1
inorder(1)
print(cnt)