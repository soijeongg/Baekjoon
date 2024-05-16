# n장의 카드 1부터 n까지 번호가 붙어 있으며 1번이 맨위 n이 맨아래
# 제일 맨위에 있는 카드 한장을 버리고 맨 위에 있는 카드를 맨 아래 넣는다 
# n이 주어졌을때 마지막에 남는 한장 구하기 
from collections import deque

n = int(input())
card_deck = deque(range(1, n + 1))
while len(card_deck)>1:
    card_deck.popleft() 
    card_deck.append(card_deck.popleft())
print(card_deck.popleft())