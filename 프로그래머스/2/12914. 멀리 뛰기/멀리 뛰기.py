def solution(n):
    answer = 0
    a,b, = 1,2
    if n==1:
        return 1
    for i in range(2,n):
        a,b = b,a+b
    
    return b % 1234567
#한번에 1칸 혹은 2칸을 뛸 수 있습니다 1과 2를 사용해 n을 만들 수 있는 경우의 수를 만들어라 