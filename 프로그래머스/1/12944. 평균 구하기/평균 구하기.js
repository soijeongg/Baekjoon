function solution(arr) {
    var answer = arr.reduce((e,v)=>e+v,0)/arr.length;
    return answer;
}