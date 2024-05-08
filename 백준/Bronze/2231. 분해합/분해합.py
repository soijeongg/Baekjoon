# 분해합 어떤 값이 들어왔을때 1부터 자릿수의 합을 더해서 주어진  값을 만들어야 한다 
total = int(input())
for i in range(total):
    sum_num = i+sum(map(int, str(i)))
    if sum_num==total:
        print(i)
        break
else:
    print(0)
        
 #map을 사용해서 문자를 숫자로 변환하는게 따로따로 변환된대 