function solution(numbers, k) {
    var answer = 0;
    for(let i=0;i<k - 1;i++) {
        answer = (answer + 2) % numbers.length;
    }
    return numbers[answer];
}
//공은 +2인 사람에게만 줄 수 있다 숫자가 주어질떄 k번쨰로 던질 사람 만약 자신이 마지막이라면 다시 1번으로 돌아간다 