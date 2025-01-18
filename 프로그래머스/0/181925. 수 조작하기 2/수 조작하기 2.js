function solution(numLog) {
    var answer = '';
    let check = {1:'w', '-1':'s', 10:'d', '-10':'a'}
    for (let i=1;i<numLog.length; i++){
        let values = numLog[i]
        let diff = numLog[i] - numLog[i - 1];
        answer += check[diff];
    }
    return answer;
}
//w 1을 더한다 s 1을뺀다 d 10 더한다 a 10 뺀다 