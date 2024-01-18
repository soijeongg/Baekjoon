function solution(n) {
    var answer = 0;
    //어떤 자연수를 제곱했을때 나오는 정수를 제곱수 제곱수라면 1 아니라면 2
    //for 문을 돌려서 i로 나눴을때 Math.floor한 몫이랑 같으면 break하고 1 아니먄 continue
  for (let i = 1; i <= n; i++) {
        if (Math.floor(n / i) === i && n%i==0) {
            answer = 1;
            break;
        } else {
            answer = 2;
        }
    }
    return answer;
}