a, b, c = map(int,input().split(" "))
d = []
d.append(a)
d.append(b)
d.append(c)
d.sort()
for i in d:
    print(i, end = " ")