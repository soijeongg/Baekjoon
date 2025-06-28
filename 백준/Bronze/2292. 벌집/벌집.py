a = int(input())
count = 1
layer = 1

while a > count:
    count += 6 * layer;
    layer += 1
print(layer)