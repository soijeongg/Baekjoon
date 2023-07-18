def solution(s):
    sumi=0
   #그러니까 숫자가 짜르륵 나오다가 문자열 'z'니오면 지금까지 한 합에서 바로 앞의 숫자를 뺀다
    sum =list(s.split(" "))
        
    while 'Z' in sum: 
        del sum[sum.index('Z')-1]
        del sum[ sum.index('Z')]
        
    for i in sum:
        sumi+=int(i)
   
    
            
            

    return sumi