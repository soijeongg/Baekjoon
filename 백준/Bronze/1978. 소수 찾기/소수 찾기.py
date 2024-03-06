#일단 주어진 개수가 주어지고 그 후에 주어지는걸 리스트에 넣자
#그 후 여기서 소수를 찾기
a = input()
b = list(map(int, input().split()))
result = []

for i in b:
    prime = True
    for j in range(2, i):
        if i % j == 0:
            prime = False
            break
    if not prime:
        result.append(i)

for i in result:
    if i in b:
        b.remove(i)
if 1 in b:
    b.remove(1)
print(len(b))
