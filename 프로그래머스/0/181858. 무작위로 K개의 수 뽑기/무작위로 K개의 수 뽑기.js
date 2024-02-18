function solution(arr, k) {
    var answer = [];
    for (let i of arr){
        if(!answer.includes(i)){
            answer.push(i)
        }
    }
    if(answer.length>=k){
      answer =  answer.slice(0,k)
    }else {
        while(answer.length!==k){
            answer.push(-1)
        }
    }
    return answer;
}
//서로다른 k개의 수를 저장한 배열을 만들려고 합니다 arr에서 나온적이 없는 수면 맨 뒤의 배열에 넣기
//그리고 이거 길이가 k개 가 될때까지 맨 뒤를 짜르던가 없으면 -1을 넣던가