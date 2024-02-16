 function solution(n) {
   var answer = n.toString(3).split("").reverse().join("");
      answer = parseInt(answer, 3);
   
   return answer;
 }


 //2진법의 숫자를 toString을 통해 3진법으로 바꾸고 배열로 만들고 reverse join
//다시 10진법으로 바꿈
//찾아보니까 toString 안에 숫자가 들어가면 숫자를 괄호안의 숫자진법의 문자열로 만듬
//근데 반대는 문자열이어서 안된다고??