N = int(input())
num_l = []
for i in range(N):
    a = int(input())
    if a == 0:
        num_l.pop()

    else:
        num_l.append(a)

total_sum = sum(num_l) if num_l else 0
print(total_sum)