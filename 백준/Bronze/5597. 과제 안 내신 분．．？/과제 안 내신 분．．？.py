#30까지 들어오는데 그중 안들어온 2숫자를 빼자 일단 30까지 배열을 만들자 

array2 = []
answer =[]
for i in range(28):
    a = int(input())
    array2.append(a)
for i in range(1,31):
    if i not in array2:
        answer.append(i)
answer.sort()
for i in range(len(answer)):
    print(answer[i])
        