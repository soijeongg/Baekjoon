function solution(str_list, ex) {
    var answer = '';
     for (let i = 0; i < str_list.length; i++) {
        if (str_list[i].includes(ex)) {
            str_list.splice(i, 1);
            i--;
        }
    }
    //꼬리문자열
    for(let i of str_list ){
        answer+=i
    }
    return answer;
}
//모든 문자열을 순서대로 합친 문자열을 꼬리 문자열이라고 함
//특정문자열을 포함시 그 문자열 제외