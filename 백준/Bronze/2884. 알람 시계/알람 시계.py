#45분 앞으로 맞추기 h시 h분이 주어짐 여기 분에 45를 뺀게 0보다 작으면 앞-1 하고 60더하기
h, m = map(int, input().split())
if m-45<0:
    m = 60+m
    h=h-1
    if h<0:
        h+=24
    print(h,m-45)
else:
    print(h,m-45)