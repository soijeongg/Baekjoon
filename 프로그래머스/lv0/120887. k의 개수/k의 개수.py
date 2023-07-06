def solution(i, j, k):
    #i(숫자) 부터 j(숫자)까지 범위가 주어질때 k라는 수가 얼마나 나오는지
    #이거 무조건 join으로 푸는 문제구나 와 나쁘다 
    new_list =[]
    cnt=0
    for s in range(i,j+1):
        new_list.append(str(s))
    a= "".join(new_list)
    for h in a:
        if int(h)==k:
            cnt+=1
            
    return cnt