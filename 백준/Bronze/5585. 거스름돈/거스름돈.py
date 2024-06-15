# 돈이 500엔, 100엔, 50엔, 10엔, 5엔, 1엔이 충분히 있고 엔제나 거스름돈이 가장 작게 
#그러면 위에서부터 하고 내려가야함
#1. 일단  돈을 입력받기 
money = int(input())
extra = 1000-money
coin = [500, 100, 50, 10, 5, 1]
answer=0
#이제 이 잔돈을 가지고 위에서부터 내려가지

for i in coin:
    answer+=extra//i
    extra=extra%i
print(answer)    