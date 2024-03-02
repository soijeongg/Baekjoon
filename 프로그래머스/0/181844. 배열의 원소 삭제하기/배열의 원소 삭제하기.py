def solution(arr, delete_list):
    answer = []
    for i in delete_list:
        if i in arr: 
            arr.remove(i)
    return arr
#두개 가 주어지는데 arr에서 두번째 원소 다 지우기 