A, B, V = map(int, input().split())

# 올라가야 할 총 높이: V - B
# 하루에 올라가는 총 높이: A - B
# (V - B) / (A - B)의 올림값이 필요한 날짜
answer = -(-(V - B) // (A - B))

print(answer)

