s = int(input())


for i in range(s):
    num1, num2 = input().split( )
    num1 = int(num1)
    ans=""
    for k in num2:
            ans += k * num1
    print(ans)
     