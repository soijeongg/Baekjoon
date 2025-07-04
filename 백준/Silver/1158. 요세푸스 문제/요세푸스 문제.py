class Node:
    def __init__(self, val):
        self.val = val
        self.next = None

def create_circle_list(n):
    head = Node(1)
    current = head

    for i in range(2, n + 1):  
        current.next = Node(i)
        current = current.next

    current.next = head 
    return head

def josephus(n, k):
    head = create_circle_list(n)
    result = []

    
    prev = head
    while prev.next != head:
        prev = prev.next

    current = head

    while n > 0:
        for _ in range(k - 1):
            prev = current
            current = current.next

        result.append(current.val)
        prev.next = current.next
        current = current.next
        n -= 1

    return result


n, m = map(int, input().split())
result = josephus(n, m)
print(f"<{', '.join(map(str, result))}>")
