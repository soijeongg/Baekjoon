function solution(a, b) {
    var answer = String(a)+b<2*a*b?2*a*b:Number(String(a)+b);
    return answer;
}