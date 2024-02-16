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
//먼저 값을 push할 배열을 만듬
//command의 첫번째부터 for문 돌려서 첫번째-1부터 두번째 까지 slice 인덱스가 아니라 번쨰여서 
//commands[시작, 끝, 몇번째 숫자] 이게 2차원으로 들어있어서 [i][0] [i][1]이렇게 들어가야 함
//그리고 정렬한 다음 그 안의 인덱스-1 (번째라서) 그리고 
//하고 안의 숫자중 인덱스-1찾아 push하기  여기서 for문 종료
//10,20, 1,2,1