# 입력 받기
total, x, plus = map(int, input().split())
fix_list = list(map(int, input().split()))
plus_list = list(map(int, input().split()))

# 손상된 팀과 여분의 카약을 가진 팀을 각각 set으로 변환
fix_set = set(fix_list)
plus_set = set(plus_list)

# 자신의 여분의 카약을 사용하는 팀 처리
for team in plus_list:
    if team in fix_set:
        fix_set.remove(team)  # 자신의 여분의 카약 사용
        plus_set.remove(team)  # 빌려줄 수 없도록 제거

# 다른 팀에게 여분의 카약을 빌려주는 과정
for team in sorted(plus_set):
    if team - 1 in fix_set:
        fix_set.remove(team - 1)
    elif team + 1 in fix_set:
        fix_set.remove(team + 1)

# 출발할 수 없는 팀의 수 계산
print(len(fix_set))