function solution(numbers) {
    var answer = 0;
    //원소의 평균값이면 for 문으로 하나씩 빼와서 다 더한 다음에 length로 나누자
    for(let i=0;i<numbers.length;i++){
        answer+=numbers[i];
    }
    answer =(answer/numbers.length);
    return answer;
}