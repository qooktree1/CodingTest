N = int(input())
lst = set()
for i in range(N):
    w = input()
    lst.add(w)
lst = list(lst)
lst.sort(key=lambda x: (len(x), x))
for word in lst:
    print(word)