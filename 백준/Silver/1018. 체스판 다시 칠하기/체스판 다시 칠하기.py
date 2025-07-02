n, m = map(int, input().split())

board = [input() for _ in range(n)]
min_change = 64
for i in range(n-7):
    for j in range (m-7):
        count_w = 0
        count_b = 0
        for x in range(8):
            for y in range(8):
                current = board[i + x][j + y]
                if (x + y) % 2 == 0:
                    if current != 'W':
                        count_w += 1
                    if current != 'B':
                        count_b += 1
                else:
                    if current != 'B':
                        count_w += 1
                    if current != 'W':
                        count_b += 1
        min_change = min(min_change, count_w, count_b)
print(min_change)  