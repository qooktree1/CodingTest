a = int(input())
b = int(input())
answer = []
for num in range(a, b + 1):
    if num == 0 or num == 1:
        continue
    for i in range(2, num):
        if num % i == 0:
            break
    else:
        answer.append(num)

if answer:
    print(sum(answer))
    print(min(answer))
else:
    print(-1)