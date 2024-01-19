function solution(strlist) {
    var answer = [];
    //strlist에 문자열로 된 값들이 들어오는데 각각의 길이를 answer애 push
    for (let i=0;i<strlist.length;i++){
        answer.push(strlist[i].length);
    }
    return answer;
}