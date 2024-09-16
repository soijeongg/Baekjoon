function solution(name, yearning, photo) {
    var answer = [];
    let nameScore = {}
      for (let i = 0; i < name.length; i++) {
        nameScore[name[i]] = yearning[i];
    }
    //그 후 하나씩 훑으면서 검사하기
    for(let i=0;i<photo.length;i++) {
         answer[i] = 0;
        for (let j=0; j<photo[i].length;j++) {
            answer[i] +=  nameScore[photo[i][j]] ||0
        }
    }
     
    return answer;
}
//그리움 점수를 모두 합한 값이 해당사진의 추억점수가 된다 해당 사진에 있는 사람의 점수 모두 더하기
//들어오는 배열 name과 사람별 그리움 점수가 담긴 yearning, 각 사진에 찍힌 사람의 이름이 담긴 2차원배열
//지금 내가 드는 생각으로는 이름이랑 점수를 키, 벨류로 해서 객체를 만든다 
//그 후 포토를 한 배열씩 훑고 그 배열을 하나씩 훑으면서 이름이 있으면 점수에 더한다 