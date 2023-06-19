testCase = int(input())
test = list(map(int,input().split()))
sort_num = sorted(test)
M = sort_num[-1]
new_list = []
for i in sort_num:
    new_num = i/M*100
    new_list.append(new_num)
sums=0
for i in new_list:
    sums+=i
print(sums/testCase)