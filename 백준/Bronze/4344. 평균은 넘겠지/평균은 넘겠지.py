C = int(input())
for i in range(C):
  a = list(map(int,input().split()))
  av = sum(a[1:])/a[0]
  result = 0
  for i in a[1:] :
    if i > av :
      result += 1 
  p = ((100/a[0])*result)
  print(f'{p:.3f}%')