function solution(a, b) {
    var answer = 0;
    let plus =0
    let minus =0
    if (a>b){
        plus=a;
        minus =b;
    }else{
        plus =b;
        minus =a;
    }
    for (let i=minus;i<=plus;i++){
        answer+=i
    }
    return answer;
    //a, b 사이의 모든 정수의 합을 리턴
}