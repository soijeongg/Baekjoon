function solution(n) {
    var answer = [];
    let n_s = n.toString();
    let n_split = n_s.split("");
    let sortedNumbers = n_split.sort((a, b) => {
    return Number(b) - Number(a);
});
    for (let i=0;i<n_split.length;i++){
        answer.push(Number(sortedNumbers[i]));
    }
    answer =  parseInt(answer.join(""))
    return answer;

}