function solution(n, k) {
    var answer;
    //n이 12000 k가 2000 10개를 먹으면 음료수 하나를 서비스로 준다
    if(n<10){
    answer = 12000*n +2000*k;
    }
    else{
        answer = 12000*n + 2000* (k- Math.floor(n/10));
    }
    return answer;
}