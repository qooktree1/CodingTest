numbers = []
for i in range(1, 21):
    numbers.append(i)  # 1~20 까지의 number 를 numbers 에 append

for i in range(10):
    st, end = map(int, input().split())
    numbers[st-1:end] = numbers[st-1:end][::-1]
print(*numbers)