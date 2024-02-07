function solution(s) {
    var answer = (s.length==4 || s.length==6) && /^[0-9]+$/.test(s)?true:false;
    return answer;
}