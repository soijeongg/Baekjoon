function solution(A,B){
    var answer = 0;
    let length = A.length
    A = A.sort((a, b) => a - b);
    B = B.sort((a, b) => b - a);
    for(let i =0 ;i< length;i++) {
         answer+= A.shift() * B.shift()
    }

    return answer;
}
//길이가 같은 배열 a,b 자연수로 이루어진다 각각 한개의 숫자릃 뽑아 두 수 를 곱한다  이 일은 배열의 길이만큼
//배열의 길이 만큼 for문을 돌리는데 가장 작은 거부터 찾아야 한다 
//그러면 먼저 sort해서 숫자 적은 순으로 불러온 다음 맨 창부터 shift 한다