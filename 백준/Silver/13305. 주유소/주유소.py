city_count = int(input())
doro = []
money = []

doro = list(map(int,input().split())) 
money = list(map(int,input().split()))


# 주유 비용과 거리가 담긴 리스트


oil = money[0]
s = oil * doro[0]

for k in range(1, city_count-1): #마지막은 빼야 됨
    if oil > money[k]:
        oil = money[k]
        s += oil * doro[k]
    else:
        s += oil * doro[k]  

print(s)
