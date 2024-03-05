"""
ox퀴즈의 결과가 있다 0는 문제를 맞은 것 문제를 맞은 경우
그 문제의 점수는 그 문제까지 연속된 0의 점수
끝까지 돌리면서 0
"""
a = int(input())

for i in range(a):
    answer = input()
    o_cnt=0
    total =0
    for i in range(len(answer)):
        if answer[i] == 'O':
            o_cnt += 1
            total += o_cnt
        else:
            o_cnt = 0
    print(total)
       