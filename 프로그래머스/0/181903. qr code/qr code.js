function solution(q, r, code) {
    var answer = '';
    code = code.split("")
    for(let i=0;i<code.length;i++){
        if(i%q==r){
            answer+=code[i]
        }
    }
    return answer;
}
//code의 각 인덱스를 q로나누었을때 나머지가 r인 문자
