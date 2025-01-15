n = int(input())
listNum = list(map(int, input().split())) 
x = int(input())
answer =0
listNum.sort()
#투포인터 
left =0
right = len(listNum)-1
while(left<right):
    if listNum[left]+listNum[right] ==x:
        answer+=1
        left+=1
        right-=1
    elif listNum[left]+listNum[right] >x:
        right-=1
    elif listNum[left]+listNum[right] <x:
        left+=1
        
print(answer)