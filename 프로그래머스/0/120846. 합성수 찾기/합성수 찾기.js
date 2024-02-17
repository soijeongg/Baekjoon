function solution(n) {
    var answer = 0;
    for(let i=4;i<=n;i++){
        let count =0;
       for(let j=1;j<=i;j++){
           if(i%j ==0){
               count++
           }
       } 
     if(count>=3){
              answer++  }}
    return answer;
}
//약수가 3개 이상인 수를 합성수라고 한다 n까지 
//근데 4부터 시작