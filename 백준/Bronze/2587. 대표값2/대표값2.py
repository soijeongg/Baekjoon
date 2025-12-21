aList = []

for _ in range(5):
    a = int(input())
    aList.append(a)

total = sum(aList)
avg = total // 5


aList.sort()
median = aList[2]

print(avg, median)