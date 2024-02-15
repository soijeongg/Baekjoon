function solution(number, limit, power) {
    var answer = [];
     
   for (let i = 1; i <= number; i++) {
    let count = 0;
    for (let j = 1; j * j <= i; j++) {
        if (i % j === 0) {
            count++;
            if (i / j !== j) {
                count++; // i의 제곱근이 아닌 약수인 경우 두 번 count에 추가
            }
        }
    }
    answer.push(count);
}
      answer = answer.map((e,v)=>{
       return    e>limit?power:e
      })
        answer = answer.reduce((e,v)=> e+v,0)
      
    return answer;
}

//각 기사는 번호가 있는데 각 기사번호의 약수 개수에 해당하는 공격력을 가진 무기 구매
//하지만 limit보다 크면 limit만큼만 구매해야함
//1당 철 1이 들어가서 필요한 철의 무게를 미리 계산해 return 하시오
//그러면 어쨋든 각자 산거를 return 하면 되네