function solution(array, commands) {
    var answer = [];
    for(let i=0;i<commands.length;i++){
        let s = array.slice(commands[i][0]-1,commands[i][1])
        s.sort((a, b) => a - b)
        s = s[commands[i][2]-1]
        answer.push(s)}

    return answer;
}

//i부터 k까지 자르고 정렬했을때 k번째에 있는 값을 구할려고 합니다 
//command의 첫번째부터 for문 돌려서 첫번째-1부터 두번째 까지 slice
//하고 안의 숫자중 인덱스-1찾아 push하기 
//10,20, 1,2,1