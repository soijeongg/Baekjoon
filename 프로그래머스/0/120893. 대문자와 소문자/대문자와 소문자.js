function solution(my_string) {
    var answer = '';
 my_string =    my_string.split("").map((e,v)=> e.toUpperCase()==e?  e.toLowerCase():  e.toUpperCase()).join("")
    return my_string;
}