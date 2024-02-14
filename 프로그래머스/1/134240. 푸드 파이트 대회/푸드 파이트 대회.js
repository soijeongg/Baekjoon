function solution(food) {
    var answer = [];
    food.shift();
    for (let i = 0; i < food.length; i++) {
        let s = food[i] % 2 ? food[i] - 1 : food[i];
        for(let j=0;j<s;j++){        
                   answer.splice(Math.floor(answer.length / 2), 0, i+1)

    }}
     answer.splice(Math.floor(answer.length / 2), 0, 0);
    return answer.join("");
}
//food의 0번은 항상 물로 1이다 
// 그 뒤부터 칼로리가 작은 순서대로 몇개씩 있는지 나열
//근데 홀수여도 이게 둘이나눠야 하기 때문에 math.floor하기
//그럼 이제 제대로 나오고 인덱스 1부터 /2한 값씩 앞뒤에 붙이기 
//아니면 앞뒤가 아니라 그냥 넣고 이 둘의 가운데를 찾아 거기에 2번을 넣고 그러면 되겠다