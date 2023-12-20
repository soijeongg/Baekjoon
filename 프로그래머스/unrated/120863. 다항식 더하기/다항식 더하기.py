def solution(polynomial):
    answer = ''
    pl_list = polynomial.split()
    pl_list = [term for term in pl_list if term != '+']
    num =0
    x_list =[]
    s =0
    for i in pl_list:
        if i.isdigit():
            num += int(i)
        else:
            x_list.append(i)
    for i in x_list:
        if i =='x':
            s+=1
        else:
            s+=int((i[:-1]))
            
    if num ==0:
        if s==1:
            answer = "x"
        elif s ==0:
            answer = "0"
        else:
            answer =  str(s)+"x"
        
    else:
        if s==1:
            answer = "x + "+str(num)
        elif s ==0:
            answer = str(num)
        else:
            answer = str(s)+"x + " +str(num)
    return answer