// 두 수의 최대공약수를 계산하는 함수
function gcd(a, b) {
    while (b !== 0) {
        let temp = b; //b값을 저장
        b = a % b; //a를 b로 나눈 나머지를 b로 b가 0이 될때 진짜 최대공약수 0이 아니라면 b를 r로 바꿈
        a = temp; //원래 b값을 임시저장-> a로 작은수와 나머지를 또 나눠야 해서 
    }
    return a; //이 a
}

// 두 수의 최소공배수를 계산하는 함수
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}


function solution(arr) {
    var answer = arr[0]
    for(let i=1;i<arr.length;i++){
        answer = lcm(answer,arr[i])
    }
    return answer;
    
    
}
/* 두수의 최소공배수는 입력된 두수의 배수중 가장작은수 이를 확장해 n개의 수중  최소공베수를 찾아라
먼저 첫 두수를 넣는다 그 후 그 두수의 최대공약수를 구하고 그 후 그 수와 그 다음 수를 최대공약수를 
찾고 최대공배수를 찾는다 
그러기 위해서 일단 최대공약수를 구하는 함수를 만든다 그리고 최소공배수 
만들고  다시 */