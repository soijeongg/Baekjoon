#정수를 저장하는 덱을 구현한 다음 입력으로 주어진 명령을 처리 하는 프로그램
"""sumary_line
push_front X: 정수 X를 덱의 앞에 넣는다.
push_back X: 정수 X를 덱의 뒤에 넣는다.
pop_front: 덱의 가장 앞에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
pop_back: 덱의 가장 뒤에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
size: 덱에 들어있는 정수의 개수를 출력한다.
empty: 덱이 비어있으면 1을, 아니면 0을 출력한다.
front: 덱의 가장 앞에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
back: 덱의 가장 뒤에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
"""
#들어오는 명령의수 가 먼자 들어온다 
# 먼저 넣을 리스트를 만들자
import sys
Deque = []
# 들어온걸 하나씩
num = int(sys.stdin.readline().rstrip())
for i in range(num):
    a = sys.stdin.readline().split()
    if a[0]=="push_back":
        Deque.append(a[1])
    elif a[0] == "push_front":
        Deque.insert(0,a[1])
    elif a[0] =="pop_front":
        if Deque:
            print(Deque[0])
            Deque = Deque[1:]
        else:
            print(-1)
    elif a[0] =="pop_back":
        if Deque:
            print(Deque.pop())
        else:
            print(-1)
    elif a[0] =="size":
        print(len(Deque))
    elif a[0] =="empty":
        if Deque:
            print(0)
        else:
            print(1)
    elif a[0] =="front":
        if Deque:
            print(Deque[0])
        else:
            print(-1)
    elif a[0] =="back":
        if Deque:
            print(Deque[-1])
        else:
            print(-1)
