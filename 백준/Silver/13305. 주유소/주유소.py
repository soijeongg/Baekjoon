city_count = int(input())
doro = []
money = []

doro = list(map(int,input().split())) # 올바른 방법으로 int 형으로 변환하여 추가
money = list(map(int,input().split()))
  # 올바른 방법으로 int 형으로 변환하여 추가

# 주유 비용과 거리가 담긴 리스트가 제대로 만들어졌습니다.


oil = money[0]
s = oil * doro[0]

for k in range(1, city_count-1):
    if oil > money[k]:
        oil = money[k]
        s += oil * doro[k]
    else:
        s += oil * doro[k]  # 비교 결과에 상관없이 해당 줄은 항상 실행되어야 합니다.

print(s)