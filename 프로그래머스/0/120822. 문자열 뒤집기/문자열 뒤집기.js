function solution(my_string) {
    var answer = '';
    //뒤부터 거꾸로 돌아가기
    for(let i= my_string.length-1;i>=0;i--){
        answer+=my_string[i]
    }
    return answer;
}