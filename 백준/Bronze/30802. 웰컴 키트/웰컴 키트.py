"""sumary_line

티는 S, M, L, XL, XXL, 그리고 XXXL의 6가지 사이즈
 티셔츠는 같은 사이즈의 
$T$장 묶음으로만 주문
펜은 한 종류로, 
$P$자루씩 묶음으로 주문하거나 한 자루씩 주문

$N$명의 참가자 중 S, M, L, XL, XXL, XXXL 사이즈의 티셔츠를 신청한 사람은 각각 
$S, M, L, XL, XXL, XXXL$명입니다.
티셔츠는 남아도 되지만 부족해서는 안 되고 신청한 사이즈대로 나눠주어야 합니다.
펜은 남거나 부족해서는 안 되고 정확히 참가자 수만큼 준비되어야 합니다.

첫줄에 참가자의 수를 주어지고 둘째줄에는 사이즈 별로 공백으로 구분되어 들어옴
셋째줄에는 티셔츠와 펜의 묶음 수 
"""
# 먼저 들어올 사람 수 잡기
n = int(input())
# 사이즈 별로 가져오기
S, M, L, XL, XXL, XXXL = map(int, input().split())
t_list = [S, M, L, XL, XXL, XXXL]
T, P  =  map(int, input().split())
t_odder =0
#티셔츠 T장씩 최대 몇묶음 주문해야하는지
# 남아도 되지만 부족해서는 안된다 T의 숫자가 주어지니까 돌면서 T안에 들어가는지 확인
#만약 크다면 나머지가 없다면 +몫을 하고 나머지가 있다면 몫+1을 한다

for i in t_list:
    t_odder+=i//T
    if i%T !=0:
        t_odder+=1

# 펜은 정확히 참가자 만큼만 있어야 함
#펜의 묶음 수 전체 수를 펜의 묶음 수 P로 나누고 나머지를 출력해준다 
pen_order_bundles = n // P  # P자루로 묶음 주문
pen_order_individual = n % P # 남은 자루는 개별 주문
print(t_odder)
print(pen_order_bundles, pen_order_individual)