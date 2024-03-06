def solution(a, b, c):
    #3수가 모두 같을 경우 
    if a==b==c: 
        return (a+b+c)*(a**2 +b**2 + c**2)*(a**3 +b**3 +c**3)
    #3수가 모두 다를 경우 
    elif a!=b!=c and c!=a:
        return a+b+c
    #3수중 두수가 같을 경우 a,b a,c b,c
    if a==b!=c or a==c!=b or b==c!=a:
        return (a+b+c)*(a**2 +b**2 + c**2)

"""세 수가 모두 다르다면 a+b+c 두수는 같고 """