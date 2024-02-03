function solution(n) {
    var answer = [];
    let n_s = n.toString();
    let n_split = n_s.split("");
    let sortedNumbers = n_split.sort((a, b) => {
    return Number(a) - Number(b);
});
    for (let i=n_split.length-1;i>=0;i--){
        answer.push(Number(sortedNumbers[i]));
    }
    answer =  parseInt(answer.join(""))
    return answer;
    //n을 매개변수로 입력받고 자릿수를 큰것부터 작은 순으로 다시 정렬후 새로운 정수 리턴
    //버블 정렬인가?
}