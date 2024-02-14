function solution(a, b, n) {
    var answer = 0;
    while (n>=a){
     answer+=Math.floor(n/a)*b
        n =n%a+Math.floor(n/a)*b}
    return answer;
    
}
//n개를 사서 n/a개를 다시 가져다 주면 *b개를 준다 
//이걸 n이 a보다 작을때 까지 반복해라 
//근데 이게 사라지는게 아니라 적립식이나까 

