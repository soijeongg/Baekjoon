def solution(arr):
    su =0
    for i in arr: 
        su +=i
    answer = su/len(arr)
    return answer