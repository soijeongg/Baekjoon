function solution(s) {
    var answer = [];
    let count = [];
    s= s.split("")
   s.forEach((char, index) => {
        if (!(char in count)) {
            answer.push(-1);
        } else {
            answer.push(index - count[char]);
        }
        count[char] = index;
    });

    return answer;
}

//그러니까 중복된 글자가 없으면 -1을 제시하고 중복된 글자가 있으면 자신과 얼마나 떨어져 있는지 더 가까운애와의 차이를 구하여라