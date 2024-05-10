#두개의 자연수를 입력받아 최대공약수 최소 공배수 찾기
import sys

def gcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a

def lcm(a, b):
    return abs(a * b) // gcd(a, b)

a,b = sys.stdin.readline().split()
a= int(a)
b = int(b)
gcd_n = gcd(a,b)
lcm_n = lcm(a,b)

print(gcd_n, lcm_n)