N,M = map(int,input().split())
list1 = [i for i in range(1,N+1)]

for i in range(M):
	num1,num2 = map(int,input().split())
	list1[num1-1] ,list1[num2-1] = list1[num2-1] ,list1[num1-1]
	

for i in list1:
    print(i, end = " ")