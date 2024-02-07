function solution(a, b) {
    var answer = 0;
    
    //길이가 같은 두 1차원 정수 배열 a, b가 매개변수
    //a, b의 내젹을 return 하도록 하는 함수를 완성
    //내적은 a[0]*b[0] +a[1]*b[1] 이렇게 각각 같은 인덱스 끼리 곱해주고 값을 더해줌
    for(let i=0;i<a.length;i++){
        answer += a[i]*b[i];
    }
    return answer;
}