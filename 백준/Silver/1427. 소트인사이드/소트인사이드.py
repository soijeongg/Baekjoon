#주어진 수를 주어지면 그 수를 내림차순으로 정렬
num = list(input())
sort_num = sorted(num, reverse = True)
print("".join(sort_num))
