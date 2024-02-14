function solution(answers) {
    var answerp1 = 0;
    var answerp2 = 0;
    var answerp3 = 0;
    let score = [];
   let p1 = Array.from({ length: answers.length }, (_, index) => [1, 2, 3, 4, 5][index % 5]);
    let p2 = Array.from({ length: answers.length }, (_, index) => [2, 1, 2, 3, 2, 4, 2, 5][index % 8]);
    let p3 = Array.from({ length: answers.length }, (_, index) => [3, 3, 1, 1, 2, 2, 4, 4, 5, 5][index % 10]);
   for(let i=0;i<answers.length;i++){
       if(answers[i] ==p1[i]){
           answerp1++
       }
     if(answers[i] ==p2[i]){
           answerp2++
       }
       if(answers[i] ==p3[i]){
           answerp3++
       }
     
       
   }
      score.push(answerp1);
       score.push(answerp2);
       score.push(answerp3);
    let result = []
    for(let i=0;i<score.length;i++){
        if(score[i] ==Math.max(...score)){
            result.push(i+1);
        }
    }
    return result
}

//답안은answer로 주어지고 차라리 이 answer의 크기만큼 배열을 만들자
//만약 지금이 찍은값보다 작으면 slice해서 맞추고 길면 그 길이에 맞게 기존의 값을 repeat하고 맞춰 짜르기
//ansewer의 길이 만큼 만들어야 한다 일단 p1의 길이만큼 일단 반복한 다음에 answer.length만큼 잘라
//이제 answer의 길이 만큼 for문을 돌린다음 맞은게 있는거만 필터건다 