"""
동쪽에는 n개의 점이있고 서쪽에는 m개의 사이트가 있다 이를 연결해 다리로 만들려고 하는데 
다리를 최대한 많이 지을려고 하고 다리끼리는 겹쳐질 수 없다 
입력의 첫 줄에는 테스트 케이스의 개수 T가 주어진다.
그 다음 줄부터 각각의 테스트케이스에 대해 강의 서쪽과 동쪽에 있는 사이트의 개수 정수 N, M
"""
def factorial(n):
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result

def comb(M, N):
    return factorial(M) // (factorial(N) * factorial(M - N))

T = int(input())

for _ in range(T):
    N, M = map(int, input().split())
    result = comb(M, N)
    print(result)