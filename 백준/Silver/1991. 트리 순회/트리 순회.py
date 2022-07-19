def preorder(c):
    if c != '.':
        print(c, end='')
        preorder(tree[c][0])
        preorder(tree[c][1])


def inorder(c):
    if c != '.':
        inorder(tree[c][0])
        print(c, end='')
        inorder(tree[c][1])

def postorder(c):
    if c != '.':
        postorder(tree[c][0])
        postorder(tree[c][1])
        print(c, end='')


N = int(input())
tree = dict()
for _ in range(N):
    m, r, l = map(str, input().split())
    tree[m] = [r, l]


preorder('A')
print()
inorder('A')
print()
postorder('A')