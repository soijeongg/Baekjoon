function solution(price, money, count) {
  
    var cout =0
    //원래 가격에서 n번 이용한다면 *n
    //처음 가지고 있던 금액 money 얼마가 모자라는지 부족하지 않으면 0
    for (let i=1;i<=count;i++){
        cout += price*i
        
    }
   let answer = money-cout>=0?0:(money-cout)*-1

    return answer;
}