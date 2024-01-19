function solution(num_list) {
    var answer = [];
    let odd =0;
    let eve =0;
    //정수가 담긴 리스트 가 주어질때 [짝수의 개수, 홀수의 개수]이렇게 반환 이러면 0은 뭐죠
    for(let i=0;i<num_list.length;i++){
        if(num_list[i]%2==0){
            eve+=1;
        }else{
            odd+=1;
        }
    }
    answer =[eve,odd];
    return answer;
}