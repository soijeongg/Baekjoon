#수 10개를 입력받는다 이걸 42로 나눈 나머지를 구하고 그 다음 서로 다른 값이 몇개 있는지

list1 = []
while True:
    a= int(input())
    list1.append(a)
    if len(list1)==10:
        break
new_list = []
for i in list1:
    k= i%42
    if k not in new_list:
    	new_list.append(k)
    
print(len(new_list))