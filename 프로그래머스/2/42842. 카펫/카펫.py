def solution(brown, yellow):
    answer = []
    yellow_x=0
    yellow_y=0
    
    for i in range(1,yellow+1):
        if yellow%i==0:
            yellow_x = int(yellow/i)
            yellow_y = i
            if yellow_x*2 + yellow_y*2 + 4 == brown :            
                answer.append(yellow_x+2)
                answer.append(yellow_y+2)
                
                return sorted(answer, reverse = True)  #가로가 커야 함
    
    return answer
#엘로우의 가로*2 +엘로우의 세로+2+4가 갈색과 같아야 한다 
