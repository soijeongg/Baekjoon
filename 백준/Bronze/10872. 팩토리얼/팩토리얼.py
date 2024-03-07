#정수가 주어질때 n 팩토리얼을 출력하는 프로그램을 작성
n = int(input())
answer=1
if n>0:
    for i in range(1,n+1):
        answer*=i
    print(answer)
else:
    print(1)
    