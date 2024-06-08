function solution(my_string, num1, num2) {
    var answer = '';
    my_string = my_string.split('')
    answer =  my_string[num2];
    my_string[num2] = my_string[num1]
    my_string[num1] = answer
    return my_string.join("")
    
}
//my_string 의 num1번째 인덱스에 있는 값을 num2의 인덱스 값과 바꾼다 