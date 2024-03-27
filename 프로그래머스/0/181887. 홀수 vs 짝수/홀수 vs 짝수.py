def solution(num_list):
    answer = 0
    list1=0
    list2=0
    for i in range(len(num_list)):
        if i%2==0:
            list1 += num_list[i]
        else:
            list2 +=num_list[i]
    if list1>list2:
        return list1
    else:
        return list2

#가장 첫번째가 1번 홀수번째 원소들의 합과 짝수번호 원소들의 합들 중 더 큰거 리턴