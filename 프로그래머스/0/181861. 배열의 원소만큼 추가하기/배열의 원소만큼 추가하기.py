def solution(arr):
    answer = []
    for i in arr: 
         answer += [i] * i
    return answer
""" 양의 정수 배열 arr가 주어지고 찰예대로 원소를 보면서 들어온 수 만큼 넣어주라 """