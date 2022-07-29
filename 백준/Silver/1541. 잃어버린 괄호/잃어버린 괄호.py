import sys

lst = input().split("-")
first = sum(map(int, lst[0].split("+")))
rest = 0
for i in range(1, len(lst)):
    rest += sum(map(int, lst[i].split("+")))
print(first - rest)