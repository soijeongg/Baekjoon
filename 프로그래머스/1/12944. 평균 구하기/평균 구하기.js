function solution(arr) {
    var answer = arr.reduce((e,v)=>e+v)/arr.length;
    return answer;
}