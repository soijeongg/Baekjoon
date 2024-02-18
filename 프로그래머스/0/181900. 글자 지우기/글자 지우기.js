function solution(my_string, indices) {
    var answer = my_string.split("").filter((e,v)=> !indices.includes(v));
    return answer.join("");
}