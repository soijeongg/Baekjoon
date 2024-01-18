function solution(my_string, n) {
    var answer = '';
    //문자열에 들어있는 문자를 하나씩 빼와서 n만큼 곱하고 더하기
    for(let i=0;i<my_string.length;i++){
        answer += my_string[i].repeat(n)
    }
    return answer;
}