n = input()
answer =""
for i in n:
    if i.upper() ==i:
        answer+=i.lower()
    else:
        answer+=i.upper()
print(answer)