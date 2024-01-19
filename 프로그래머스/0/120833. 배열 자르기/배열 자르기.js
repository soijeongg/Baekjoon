function solution(numbers, num1, num2) {
    var answer = [];
    //numbers의 num1번째 인덱스부터 num2까지짤라 저장 이거 for 돌려도 되고 splice
    answer = numbers.slice(num1,num2+1)
    return answer;
}