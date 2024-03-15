def solution(num):
    a,b = 0,1
    for i in range(num):
        a,b = b,(a+b)%1234567
    return a

#피보나치 수 란  F(n) = F(n-1) + F(n-2) 가 되는 수  2아성아 압력됐을때 이게 되는 수를 akfgksek 
