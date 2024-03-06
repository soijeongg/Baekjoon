def solution(s):
    s =s.split(" ")
    answer = ''
    for i in range(len(s)):
        for j in range(len(s[i])):
            if j%2==0:
                answer += s[i][j].upper()
            else:
                answer  += s[i][j].lower()
        if i< len(s)-1:
            answer+=" "
    return answer
     
"""문자열 s는 한개이상의 단어로 구성 공백문자 하나 일단 .split()짝수번째 알파벳은 대문자 홀수는 소문자 """