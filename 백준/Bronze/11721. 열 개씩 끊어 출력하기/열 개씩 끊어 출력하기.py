answer = input()
length = len(answer)

for i in range(0,length,10):
    print(answer[i:i+10])