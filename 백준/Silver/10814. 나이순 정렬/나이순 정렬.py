# 온라인 저지에 가입한 사람들의 나이와 이름이 순서대로 주어짐 나이를 오름차순으로 같다면 먼저 가입한 순서대로
# 1. 먼저 들어온 숫자를 입력받고 이걸로 for문을 돌림다
# 나이만을 정수로 받는다 #그 후 정렬을 하는데 정렬기준을 나이로 한다3
m_l = []
num = int(input())
for i in range(num):
    age, name = input().split()
    age = int(age)
    m_l.append((age, name))

m_l = sorted(m_l, key=lambda x: x[0])
for i in range(len(m_l)):
    print(m_l[i][0],m_l[i][1])
