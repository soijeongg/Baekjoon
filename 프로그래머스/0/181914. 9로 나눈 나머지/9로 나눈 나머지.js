function solution(number) {
    var answer = number.split("").reduce((e,v)=> e+Number(v),0);
    return answer%9;
}
//정수를 9로 나눈 나머지는 그 정수의 각 자리 숫자의 합을 9로 나눈것과 나머지가 같은것
//각 자리 숫자의 합이 뭐야 다 더한거? 이거 스플릿하고 reduce하면 됨
//이걸 구로 나눈것의 나머지