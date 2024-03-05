"""
세개의 자연수를 곱한값에 0부터9가 각각 몇번 쓰였는지 구하는 프로그램
일단 0부터 9까지 딕셔너리를 만들고 곱한값을 str로 돌려서 있으면 그 값에 +1을 하자
"""
a = int(input())
b = int(input())
c = int(input())
sum = a*b*c
check = {"0":0, "1":0, "2":0, "3":0, "4":0, "5":0, "6":0, "7":0, "8":0, "9":0}
for i in str(sum):
    check[i]+=1
for key, value in check.items():
    print(value)