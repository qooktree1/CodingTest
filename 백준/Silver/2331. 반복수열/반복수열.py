A, P = map(int, input().split())
visited = [A]
tmp = 0
while 1:
    cnt = 0
    for c in str(visited[-1]):
        cnt += int(c) ** P

    if cnt in visited:
        tmp = visited.index(cnt)
        break
    visited.append(cnt)

print(tmp)