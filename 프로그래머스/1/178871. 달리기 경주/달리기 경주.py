def solution(players, callings):
    rankings = {player: i for i, player in enumerate(players)}  # 선수들의 등수를 저장하는 딕셔너리
    for calling in callings:
        idx = rankings[calling] # 호명된 선수의 현재 
        
        players[idx], players[idx-1] = players[idx-1], players[idx] # 호출된 선수와 앞 선수의 위치를 변경
        rankings[players[idx]] = idx
        rankings[players[idx-1]] = idx-1 # 호출된 선수의 앞 선수의 등수를 1 증가시킴
        
    return players