function solution(arr) {
    var answer = [];
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i]; j++) {
            answer.push(arr[i]);
        }
    }
    return answer;
}

//들어온 값을  그 숫자만큼 repeat하기 
