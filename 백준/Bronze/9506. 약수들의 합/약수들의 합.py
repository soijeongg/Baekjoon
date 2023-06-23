#3은 12의 약수이고, 12는 3의 배수이다
#입력은 테스트 케이스마다 한 줄 간격으로 n이 주어진다. (2 < n < 100,000)

#입력의 마지막엔 -1이 주어진다.

##출력
#테스트케이스 마다 한줄에 하나씩 출력해야 한다.

#이 완전수라면, n을 n이 아닌 약수들의 합으로 나타내어 출력한다(예제 출력 참고).

#이때, 약수들은 오름차순으로 나열해야 한다.

#n이 완전수가 아니라면 n is NOT perfect. 를 출력한다.

while True:
    a= int(input())
    if a== -1:
        break
    list1 = []
    for i in range(1,a):
        if a%i ==0:
            list1.append(i)
        else:
            pass
       
    if sum(list1)==a:
        for i in range(len(list1)):
            if i==0:
                print(f"{a} = {list1[i]} + ",end="")
            elif list1[i] == list1[-1]:
                print(f"{list1[i]}")
            else:
                print(f"{list1[i]} + ",end = "")
    else:
        print(f"{a} is NOT perfect.")