function solution(myString) {
    var answer = [];
    answer = myString.split('x').sort()
   answer = answer.filter(item => item !== "");
    return answer
}