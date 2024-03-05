def solution(n, m):
    answer = []
    max_number = n if n >= m else m
    one =0
    #최대공약수 
    for i in range(1,max_number):
        if n%i==0 and m%i==0:
            one=i
    
    #최대공배수 
    two = n*m/one
    answer.append(one)
    answer.append(two)
    return answer