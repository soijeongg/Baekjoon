function solution(num_list) {
    var answer = [];
    //거꾸로 뒤집기 이거 그냥 for문 반대로 돌리면 되는거
    for(let i=num_list.length-1;i>=0;i--){
        answer.push(num_list[i]);
    }
    return answer;
}