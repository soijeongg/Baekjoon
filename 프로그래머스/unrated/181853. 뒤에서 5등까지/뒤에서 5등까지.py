#가장 작은 5개의 깃수를 오름차순으로 담은 list return
def solution(num_list):
    num_list.sort()
    answer = num_list[0:5]
    return answer