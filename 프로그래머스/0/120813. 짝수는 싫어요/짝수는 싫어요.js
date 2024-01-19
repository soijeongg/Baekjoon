function solution(n) {
    var answer = [];
    //정수 n이하의 홀수가 오름차순 
    for(let i=0;i<=n;i++){
    if( i%2!==0){
        answer.push(i);
    }};
    return answer;
}