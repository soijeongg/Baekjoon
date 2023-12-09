def solution(x):
    sum=0
    str_x = str(x)
    for i in str_x:
        sum+=int(i)
    
    #이제 나누자
    if x %sum ==0:
        answer = True
    else:
        answer = False
    return answer
"""양의 정수 x가 하샤드 수라면 x의 자릿수 합으로 x가 나눠져야 합니다 
    그니까 일단 숫자가 들어와서 str로 변환을 해야 겠네
    그리고 for문을 통해 하나씩 빼온 다음에 이걸 다시 int로 만들어 하나씩 더해 
    그리고 다시 x를 나눠서 %== 0이면 true else false"""