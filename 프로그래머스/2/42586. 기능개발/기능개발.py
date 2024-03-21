def solution(progresses, speeds):
    answer = []
    days = []
    for i ,j in zip(progresses,speeds):
        remain =  100-i
        day = remain//j
        if remain%j!=0:
            day+=1
        days.append(day)

    current_day = days[0]
    count = 1
    
    # 두 번째 작업부터 비교를 시작합니다.
    for day in days[1:]:
        if day > current_day:
            answer.append(count)   #만약 현재작업 후의 작업이 지금보다 작은게 없으면 젛어줘야 함
            count = 1                
            current_day = day    #현재작업 다음 작업으로 바꾸기 
        else:
            # 만약 작은게 있다면?
            count += 1
    
    # 마지막 배포 작업을 추가합니다.
    answer.append(count)
    
    return answer

#그러니까 맨 처음이 지금까지 한거 두번째게 스피드 근데 아무리 두번째게 빨리 끝난다고 해도 앞에 안끝나면 못함
#내 생각은 일단 100에서 앞을뺀거를 나누기 나머지가 있으면 +1하기 
#그러면 이제 나옿겠지 이중 for문 돌면서 count=0 만들고 첫번째꺼보다 작은거 없으면 count 를 answer에 넣고 있으면 +1하고 넣음
#그리고 작은것과 지금꺼는 pop해서 없애기 