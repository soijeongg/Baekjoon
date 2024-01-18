function solution(money) {
    var answer = [];
    let coffe = Math.floor(money/5500);
    let m = money%5500;
    answer =[coffe,m]
    return answer;
}