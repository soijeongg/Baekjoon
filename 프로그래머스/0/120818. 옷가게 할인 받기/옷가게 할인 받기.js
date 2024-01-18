function solution(price) {
    var answer = 0;
    //price가 100000이상 일떄 5% 300000 이상일때 10% 500000 이상 일때 20%
    if(price<100000){
        answer = price
    }else if(price <300000){
        answer = Math.floor(price-(price*(5/100)))
    }else if(price<500000){
        answer = Math.floor(price-(price*(10/100)))
    }else{
        answer = Math.floor(price-(price*(20/100)))
    }
    return answer;
}