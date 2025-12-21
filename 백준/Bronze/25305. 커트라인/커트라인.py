a, b = map(int, input().split())
numList = list(map(int, input().split()))

numList.sort(reverse=True)
print(numList[b-1])