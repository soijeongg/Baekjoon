# 1사분면은 -a b 2사분면은 a,b 3사분면은 -a -b 4사분면은 a -b
#두 정수가 주어지면 이 정수가 ㅁ-인지 )인지 
A = int(input())
B =int(input())
if A>0 and B>0:
    print(1)
elif A>0 and B<0:
    print(4)
elif A<0 and B<0:
    print(3)
elif  A<0 and B>0:
    print(2)