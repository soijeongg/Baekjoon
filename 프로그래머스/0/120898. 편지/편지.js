function solution(message) {
    var answer = 0;
    //한글자 가로 2cm 의 크기로 적으려고 하고 여백은 생각하지 않는다 그냥 글자수*2
    answer = message.length*2
    return answer;
}