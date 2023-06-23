N,M = map(int,input().split())
list1 =[0 for i in range(0,N)]
for i in range(M):
    num1,num2,num3 = map(int,input().split())
    for k in  range(num1,num2+1):
        list1[k-1] = num3
for i in list1:
    print(i, end = " ")