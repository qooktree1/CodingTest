A, B, C = map(int, input().split())
lst = []
lst.append(A)
lst.append(B)
lst.append(C)
lst.sort()
print(*lst)