def solution(n):
    cnt=0
    for i in range(2,n+1):
        if (n % i) ==1:
            cnt=i
            return cnt