def solution(citations):
    answer = 0
    citations.sort(reverse=True) # 반대로 내림차순
    
    for i in range(len(citations)):      #하나씩 나와서 논문의 인용횟수 순의 보다 작아지는곳 찾기-> 그곳이 i
        if(citations[i] < i+1):
            return i

    return len(citations) #만약 모든 없다면                   

#그러니까 