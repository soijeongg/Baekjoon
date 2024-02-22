function solution(s) {
    let answer = s.toLowerCase().split(" ");

    for (let i = 0; i < answer.length; i++) {
        if (/^[a-zA-Z]/.test(answer[i])) {
            answer[i] = answer[i][0].toUpperCase() + answer[i].slice(1);
        }
    }

    return answer.join(" ");
}
