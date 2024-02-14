function solution(arr, divisor) {
    var answer = [];
   answer =  arr.filter(element =>element%divisor==0);
    if(answer ==0){
        answer =[-1]
    };
    answer.sort(function(a, b) {
  return a - b; //오름차순 반대로 하면 내림차순
    });
                
    return answer;
    //array의 각 element 중 divisor로 나누어 떨어지는 값
    //오름차순으로 정렬한 배열을 반환하는 함수
}