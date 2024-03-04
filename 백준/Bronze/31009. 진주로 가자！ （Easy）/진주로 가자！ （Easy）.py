num = int(input())
my_dict = {} 
for i in range(num):
    a,b = input().split()
    my_dict[a] = int(b)
jinju = my_dict["jinju"]
count =0
for key, value in my_dict.items():
        if value > jinju:
            count += 1
print(jinju)            
print(count)
