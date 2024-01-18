function solution(slice, n) {
    var answer;
    //n이 피자를 먹는 사람 slice가 조각 수 한명당 최소 한조각 씩 먹기
    if(n%slice==0){
        answer = Math.floor(n/slice);
    }else{
        answer = Math.floor(n/slice)+1
    }
    
    return answer;
}