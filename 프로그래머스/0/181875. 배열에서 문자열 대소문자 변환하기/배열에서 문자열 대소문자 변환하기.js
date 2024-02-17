function solution(strArr) {
    var answer = [];
         let j =  strArr.map((e,v)=> v%2==1?e.toUpperCase():e.toLowerCase())
         answer.push(j)
       
    
    return answer[0];
}

//모든 원소가 알파벳으로 이루어졌을때 홀수번째 인덱스는 대문자 짝수는 소문자 