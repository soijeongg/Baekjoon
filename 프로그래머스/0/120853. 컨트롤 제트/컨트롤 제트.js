function solution(s) {
    var answer = s.split(" ");
  while (answer.includes("Z")){
      answer.splice(answer.indexOf("Z")-1,1)
         answer.splice(answer.indexOf("Z"),1)
         }
    if (answer.length ==0)return 0
    else{
        answer = answer.reduce((e,v)=> e+Number(v),0)
    }
    
    return answer;
}
//그러니까 나오다가 z가 나오면 앞의것, z지우기