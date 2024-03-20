def solution(s):
    answer = 0
    result =0
    s_list = list(s)
    for i in range(len(s)):
        last = s_list.pop()
        s_list.insert(0,last)
        stack = []
        for bracket in s_list:
            if bracket in ["(", "[", "{"]:
                stack.append(bracket)
            elif bracket in [")", "]", "}"]:
                if not stack:
                    break
                if (bracket == ")" and stack[-1] == "(") or \
                   (bracket == "]" and stack[-1] == "[") or \
                   (bracket == "}" and stack[-1] == "{"):
                    stack.pop()
                else:
                    break
        else:
            if not stack:
                result += 1
    return result
#s가 매개변수로 들어옴 이 s를 왼쪽으로 s의 길이 만큼 회전 그러니까 길이 만큼 맨 뒤의걸 앞으로 보내야 한다는 거지

