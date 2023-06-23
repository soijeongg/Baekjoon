def solution(my_string, letter):
    list1 = list(my_string)
    while letter in list1:
        list1.remove(letter)
    a= "".join(list1)
    return a
    