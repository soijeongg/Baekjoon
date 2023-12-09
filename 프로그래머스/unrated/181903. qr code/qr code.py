def solution(q, r, code):
    answer = ''
    for i in range(len(code)):
        if i %q ==r:
            answer  += code[i]
    return answer

"""두정수 q, r가 주어진다 
    문자열 code가 주어짐 code의 문자열을 각 인덱스 q로 나누었을때 나머지가 r인 위치의 문자를
    앞에서 부터 이어붙인 문자열 return 
    그니까 전체가 몇인지는 모르는데 
    for i in range(len(code)):
        if i %q ==r:
            answer  += code[i] """
            
        