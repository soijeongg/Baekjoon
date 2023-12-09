def solution(strArr):
    answer = 0
    list =[]
    for i in strArr:
        list.append(len(i))
    most_common_value = max(set(list), key = list.count)
    for i in strArr: 
        if len(i)==most_common_value:
            answer +=1
    return answer
        
    
    