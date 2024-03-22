import sys

n = int(sys.stdin.readline())
n_list = []
for i in range(n):
    n_list.append(sys.stdin.readline().strip())
set_list =set(n_list)
n_list = list(set_list)
n_list.sort()
n_list.sort(key = len)

for i in n_list:
    print(i)
