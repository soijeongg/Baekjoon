"""
정수 n이 주어졌을때 n을 1,2,3의 합으로 나타내는 방법의 수를 구하는 프로그램
결국 답은 dp[n-1]+dp[n-2] +dp[n-3]
먄약 1이면 답은 1하나 
만약 2면 답은 1+1, 2, 2개 
답이 3이면 1+1+1, 2+1, 3,2+1 4개 

"""
dp  = [0] * 11
dp[1] =1
dp[2] =2
dp[3] =4
for i in range(4,11):
    dp[i] = dp[i-1]+dp[i-2]+dp[i-3]

number = int(input())

for i in range(number):
    n = int(input())
    print(dp[n])