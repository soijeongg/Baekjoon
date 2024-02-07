function solution(rny_string) {
    var answer = '';
    answer = [...rny_string].map((element)=> element=="m"?element= "rn":element).join("")
    return answer;
}