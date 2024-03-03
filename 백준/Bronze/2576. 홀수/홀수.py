lista = []
for i in range(7):
    a = int(input())
    lista.append(a)
odd =0 
odds =[]
for i in lista:
    if i%2==1:
        odd+=i
        odds.append(i)
if odd ==0:
    odd=-1
    
print(odd)
if len(odds)!=0:
    print(sorted(odds)[0])
        
    