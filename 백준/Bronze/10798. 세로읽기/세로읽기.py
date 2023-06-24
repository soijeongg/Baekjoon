list1 = []
while True:
    if len(list1)== 5:
        break
    a= input()
    list1.append(a)
for g in range(15):
    for i in range(5):
        try: 
            print(list1[i][g],end = "") 
        except:
            pass
#이렇게 하면 나오기는 하는데 왜 5번 연속으로 나오지 않는다 
# 이유가 이 앞에 for i in range(5)때문인듯 이걸 없애야 한다
#그러면 len(list1[k]))바꿔야 함
#이걸 작은걸로 하면 제일 큰거 출력 할때 출력이 안되고 pass돨것임
#그래서 제일 큰걸로 설정 제일 큰거는 15라고 주어짐