
a, b, c = map(int, input().split())

time_list_s = []
time_list_d = []

for _ in range(3):
    start_time, end_time = map(int, input().split())
    time_list_s.append(start_time)
    time_list_d.append(end_time)

max_d_time = max(time_list_d)
min_time = min(time_list_s)

cnt_car = 0
cnt_list = []

for i in range(min_time, max_d_time):
    for j in range(3):
        if time_list_s[j] <= i < time_list_d[j]:
            cnt_car += 1
    cnt_list.append(cnt_car)
    cnt_car = 0

total_fee = 0
for count in cnt_list:
    if count == 3:
        total_fee += c * 3
    elif count == 2:
        total_fee += b * 2
    elif count == 1:
        total_fee += a

print(total_fee)