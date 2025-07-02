n = int(input())
aList = set(map(int, input().split()))

m = int(input())
bList = list(map(int, input().split()))
for num in bList:
    print(1 if num in aList else 0)