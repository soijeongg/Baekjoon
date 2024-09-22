N = int(input())
points = [tuple(map(int, input().split())) for _ in range(N)]
sorted_points = sorted(points)
for point in sorted_points:
    print(point[0], point[1])