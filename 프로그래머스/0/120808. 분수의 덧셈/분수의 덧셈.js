function solution(numer1, denom1, numer2, denom2) {
    let max_num =0;
    let min_num = 0;
    let down =0
    var answer = [];
    let divi = denom1*denom2
    denom1 = numer1*denom2 + numer2*denom1
    //최대공약수 구하기
    if(divi>denom1){
        max_num = divi
        min_num = denom1
    }else{
        min_num = divi
        max_num = denom1
            }
   for(let i=0;i<=max_num;i++){
       if(divi%i==0 && denom1%i==0){
            down=i} }
    //이 최대공약수만큼 분모 분자 나누기
    
    divi = divi/down
      denom1 = denom1/down  
    return [denom1,divi]
}