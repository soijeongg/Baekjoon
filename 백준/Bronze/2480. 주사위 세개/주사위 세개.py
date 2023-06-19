#1에서부터 6까지의 눈을 가진 3개의 주사위를 던져서 다음과 같은 규칙에 따라 상금을 받는 게임이 있다. 

#같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다. 
#같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다. 
#모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.
A,B,C= map(int,input().split())
A>=6
B>=6
C>=6
if A==B and A==C and B==C :
    print(10000+A*1000)
elif A==B or A==C:
    print(1000+A*100)
elif B==C:
    print(1000+B*100)
elif A!=B and B!=C and A!=C:
    if A>=B and A>=C:
        print(A*100)
    elif B>=A and B>=C:
        print(B*100)
    elif C>=A and C>=B:
        print(C*100)
    
        