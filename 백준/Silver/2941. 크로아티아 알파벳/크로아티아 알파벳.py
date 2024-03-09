#일단 변경된 알파벳으로 들어옴 이걸 보고 크로아티아 알파벳으로 바꾸고 개수 세기

croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']

a = input()
for i in croatia:
    a = a.replace(i,"!")
print(len(a))