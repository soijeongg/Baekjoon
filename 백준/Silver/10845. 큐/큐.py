# 정수를 저장하는 큐를 구현한 다음 입력으로 주어지는 명령을 처리하는 프로그램 구현
# 명령은 6가지
"""
push X: 정수 X를 큐에 넣는 연산이다.
pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
size: 큐에 들어있는 정수의 개수를 출력한다.
empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
"""
# 먼저 시간초과를 방지 하기 위해 sys로 하기
import sys
que = []
num = int(sys.stdin.readline().rstrip())
for i in range(num):
    a = sys.stdin.readline().split()
    if a[0] == "push":
        que.append(int(a[1]))
    elif a[0] == "pop":
        if que:
            print(que[0])
            que = que[1:]
        else:
            print(-1)
    elif a[0] == "size":
        print(len(que))
    elif a[0] == "empty":
        if que:
            print(0)
        else:
            print(1)
    elif a[0] == "front":
        if que:
            print(que[0])
        else:
            print(-1)
    elif a[0] == "back":
        if que:
            print(que[-1])
        else:
            print(-1)

