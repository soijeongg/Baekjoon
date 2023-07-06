def solution(my_string):
    a =[]
    for i in my_string:
        if i.upper() ==i:
            a.append(i.lower())
        elif i.lower() ==i:
            a.append(i.upper())
    answer = "".join(a)

        

    return answer