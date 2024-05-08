# 블랙잭 구현하기
# 첫째줄에 카드 개수 가 주어지고 둘째줄에는 카드에 쓰여있는 숙가 주어진다
# 합이 카드에 쓸여진 숫자의 수보다 작지만 최대한 가까운 카드 3장의 합을 구해 print
card, num = map(int, input().split())
max_num = 0
number_list = input().split()
for i in range(len(number_list)):
    for j in range(i+1, len(number_list)):
        for  k in range(j+1, len(number_list)):
            card_sum = int(number_list[i])+int(number_list[j])+int(number_list[k])
            if card_sum <= num and card_sum > max_num:
                max_num = card_sum
print(max_num)