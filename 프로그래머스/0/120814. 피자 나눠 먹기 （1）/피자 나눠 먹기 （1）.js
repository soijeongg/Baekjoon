function solution(n) {
    var answer = 0;
    //7로 나눴을때 나머지가 남으면 1개 더
    if(n%7==0){
        answer = Math.floor(n/7);
    }else{
        answer = Math.floor(n/7)+1
    }
    return answer;
}