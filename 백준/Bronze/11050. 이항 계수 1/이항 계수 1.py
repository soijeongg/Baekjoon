import math
a, b = map(int,input().split())

answer = math.factorial(a)//(math.factorial(b)* math.factorial(a-b))
print(answer)