#리스트 만들어서풀기
a, b, c = map(int, input().split())
time_list=[0]*100
for _ in range(3):
    start_time, end_time = map(int, input().split())
    for i in range (start_time,end_time):
        time_list[i]+=1
sum =0
for n in time_list:

    if n==3:

        sum+=n*c

    elif n==2:

        sum+= n*b

    elif n==1:
        sum+= n*a

    
    else:
        pass

print(sum)