#첫째 줄에는 영수증에 적힌 총 금액 


#둘째 줄에는 영수증에 적힌 구매한 물건의 종류의 수 


#이후 
#$N$개의 줄에는 각 물건의 가격 
#$a$와 개수 
#$b$가 공백을 사이에 두고 주어진다.

#출력
#구매한 물건의 가격과 개수로 계산한 총 금액이 영수증에 적힌 총 금액과 일치하면 Yes를 출력한다. 
#일치하지 않는다면 No를 출력한다

sum=0
A= int(input())
B = int(input())
for i in range(B):
    C,D = map(int,input().split())
    sum+=C*D
if sum==A:
    print("Yes")
else :
    print("No")