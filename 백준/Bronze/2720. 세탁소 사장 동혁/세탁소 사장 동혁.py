#1.24달러가 124로 입력되기 떄문에 각각에 100 곱하기
quarter =25
dime =10
nickel = 5
penny =1
a= int(input())
for i in range(a):
    b= int(input())
    print(b//quarter,b%quarter//dime,b%quarter%dime//nickel,b%quarter%dime%nickel//penny)