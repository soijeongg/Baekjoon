function solution(numbers) {
    var answer = 0;
    //두개를 곱해 만들 수 있는 최댓값 다행히 -가 없어서 제일 큰거 하나뺴고 지우고 다른거 하나빼고 지우고
    let maxx = Math.max.apply(null,numbers); //첫번째 최대값
    let max_num = numbers.indexOf(maxx);
    numbers = numbers.filter((element, index) => index !== max_num);
    let max2 = Math.max.apply(null,numbers); 

    answer =maxx*max2;
    return answer;
}