n, x = map(int, input().split())
fix_list = list(map(int, input().split()))

current_sum = sum(fix_list[:x]) 
maxNum = current_sum
count = 1

for i in range(x, n):
    current_sum = current_sum - fix_list[i - x] + fix_list[i]
    
    if current_sum > maxNum:
        maxNum = current_sum
        count = 1 
    elif current_sum == maxNum:
        count += 1  


if maxNum == 0:
    print("SAD")
else:
    print(maxNum)
    print(count)
