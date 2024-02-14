function solution(n) {
    var answer = [];
    let n_split =n.toString().split("");
    let sortedNumbers = n_split.sort((a, b) => {
    return b - a});
   
    answer =  Number(sortedNumbers.join(""))
    return answer
}