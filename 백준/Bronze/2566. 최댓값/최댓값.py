# 9×9 격자판에 쓰여진 81개의 자연수 또는 0이 주어질 때, 
#이들 중 최댓값을 찾고 그 최댓값이 몇 행 몇 열에 위치한 수인지 구하는 프로그램을 작성
#첫째 줄에 최댓값을 출력하고, 
#둘째 줄에 최댓값이 위치한 행 번호와 열 번호를 빈칸을 사이에 두고 차례로 출력한다. 
#최댓값이 두 개 이상인 경우 그 중 한 곳의 위치를 출력한다.

first_list = []
while len(first_list)<9:
    first_list.append(list(map(int,input().split())))
max_num=0
for i in range(0,9):
    for k in first_list[i]:
        if k> max_num:
            max_num =k
        else :
            pass
print(max_num)
for i in range(9):
    for k in first_list[i]:
        if max_num ==k:
            print(i+1,first_list[i].index(max_num)+1)