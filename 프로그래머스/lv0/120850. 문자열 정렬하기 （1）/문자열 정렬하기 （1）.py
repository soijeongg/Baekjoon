def solution(my_string):
    num_list = []
    numm =['0','1','2','3','4','5','6','7','8','9']
    for i in my_string:
        if i in numm:
            num_list.append(int(i))
    num_list.sort()
    
            
    
    return num_list