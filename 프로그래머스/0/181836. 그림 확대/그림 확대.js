function solution(picture, k) {
    var answer = [];
    for(const pic of picture) {
        const expandedRow = [...pic].map(char => char.repeat(k)).join('');
       for (let i = 0; i < k; i++) {
      answer.push(expandedRow);
    }
}
    return answer;
}