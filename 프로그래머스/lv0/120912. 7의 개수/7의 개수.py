def solution(array):
    cnt=0
    arr1 ="".join(str(array))
    for i in arr1:
        if i=="7":
            cnt+=1
    return cnt
        