num = []
for i in range(9):
    a= int(input())
    num.append(a)
sort_num = sorted(num)
max_num = sort_num[-1]
print(max_num)
print(num.index(max_num)+1)