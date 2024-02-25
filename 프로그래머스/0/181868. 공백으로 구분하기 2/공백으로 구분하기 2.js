function solution(my_string) {
    var answer = my_string.split(" ").filter((e,v)=> e !=="");
    return answer;
}