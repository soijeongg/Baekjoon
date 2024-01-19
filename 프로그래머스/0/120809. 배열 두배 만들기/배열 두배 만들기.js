function solution(numbers) {
    var answer = [];
    //한 원소에 *2
    for(let i=0;i<numbers.length;i++){
        answer.push(numbers[i]*2);
    }
    return answer;
}