def solution(numbers):
    answer = [-1] * len(numbers)
    stack = []
    for i in range(len(numbers)):
        while stack and numbers[stack[-1]] < numbers[i]:  # 스택이 비어있지 않고 현재 숫자가 스택의 top에 있는 숫자보다 크다면
            answer[stack.pop()] = numbers[i]  # 해당 인덱스의 결과를 현재 숫자로 업데이트
        stack.append(i)  # 현재 인덱스를 스택에 추가
        
    return answer