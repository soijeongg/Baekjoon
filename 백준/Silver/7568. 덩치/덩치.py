#키와 몸무게가 들어옴 둘다 커야 더 크다고 할 수 있음
#첫번째 수를 range해 
data =[]
answer =[]
a = int(input())
for i in range(a):
    x,y = map(int, input().split())
    data.append((x,y))
for i in range(a):
    count =0
    for j in range(a):
        if i!=j and data[i][0]<data[j][0] and data[i][1]<data[j][1]:
            count+=1
    answer.append(count+1)
for i in answer:
    print(i,end =" ")
        