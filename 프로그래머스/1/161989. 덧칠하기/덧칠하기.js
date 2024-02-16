function solution(n, m, sections) {
    var answer = 0;
    var painted = 0; //지금 어디있는지
    for(let section of sections) {
        if(painted < section) {
            answer++;
            painted = section+m-1;
        }
    }
    return answer;
}

//하나씩 뺴와서 