# 첫째줄에는 명령의 개수 for i in range로 잡고
# 그 다음부터는 띄어쓰기로 명령이 들어온다
"""
push X: 정수 X를 스택에 넣는 연산이다.
pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
size: 스택에 들어있는 정수의 개수를 출력한다.
empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
"""
# 먼저 넣을 리스트를 만들자
import sys
print_list = []
# 들어온걸 하나씩
num = int(sys.stdin.readline().rstrip())
for i in range(num):
    a = sys.stdin.readline().split()
    if a[0] == "push":
        b = int(a[1])
        print_list.append(b)
    elif a[0] == "pop":
        if print_list:
            print(print_list.pop())
        else:
            print(-1)
    elif a[0] == "size":
        print(len(print_list))
    elif a[0] == "empty":
        if print_list:
            print(0)
        else:
            print(1)
    elif a[0] == "top":
        if print_list:
            print(print_list[-1])
        else:
            print(-1)
