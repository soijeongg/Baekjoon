function solution(x) {
    var answer = true;
    let sum = String(x).split("").reduce((e,v)=> e+Number(v),0)
    answer = x%sum==0?true:false;
    return answer;
}
//하샤드 수 자릿수를 더한 값으로 나눠줘야 한다 그러면 일단 문자로 바꿔서 나눈 다음에 reduce넣기