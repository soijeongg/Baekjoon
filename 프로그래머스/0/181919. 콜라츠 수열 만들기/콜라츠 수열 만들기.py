def solution(n):
    answer = []
    answer.append(n)
    while n!=1:
        if n%2==0:
            n = n/2
            answer.append(n)
        else: 
            n = 3*n+1
            answer.append(n)
    return answer

"""x에 대해 현재값이 짝수면 2로 나누고 홀수면 3*x+1 바꿧 계속 하다 보면 결국 x가 1이 된다
그러니까 나오는 값을 다 answer에 append하라는 거지??
"""