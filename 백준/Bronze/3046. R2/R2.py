# 생일선물로 숫자를 주다니.... 너도 수학에 미친놈이구나
R1, s = map(int,input().split())
#s는 (R1+R2)/2와 같다 2s는 R1+R2 그럼 2s-R1은 R2
R2 = 2*s-R1
print(R2)