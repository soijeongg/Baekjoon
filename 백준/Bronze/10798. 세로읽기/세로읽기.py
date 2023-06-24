#제일 처음짠 코드 이러면 주어지는 줄의 길이가 같으면 가능하지만 크기가 다르면 에러가 난다
#index error의 이유 각 input의 긹이가 달라서
"""
list1 = []
while True:
    if len(list1)== 5:
        break
    a= input()
    list1.append(a)
for  k in range(5):
    for g in range(len(list1[k])):
        for i in range(5):
            print(list1[i][g],end = "")
            """

#그러면 애초에 가장 길이가 긴 list로 설정  각 줄에는 최대 15개의 글자들이 주어진다고 나와있음 15로 잡기
#input받을 list 생성
list1 = []
while True:
    if len(list1)== 5:
        break
    a=input()
    list1.append(a)
# 갯수가 5일때 까지 input 받음
#제일 많은 글자갯수인 15,input받은 갯수를 for문에 넣어서 출력
#먼저 앞이 뒤가 바뀌고 뒤가 다 출력 된 후에 앞이 바뀌어야 한다
for k in range(15):
    for i in range(5):
        try:
            print(list1[i][k], end = "")
        except:
            pass