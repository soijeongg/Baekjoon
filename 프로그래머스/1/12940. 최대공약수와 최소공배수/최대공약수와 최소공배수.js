function solution(n, m) {
    var answer = [];
    let max_number = n>=m?n:m
    let one =0;
    let two =0;
     let num=1;
    //최대공약수
    for(let i=0;i<=max_number;i++){
        if (n%i==0 &&m%i==0){
            one=i;
        }
    }
    two = n*m/one;
    answer.push(one,two);
   
    
    return answer;
}

//최대공약수 둘이 동시에 나눠지는 가장 큰 수  그러면 1부터 둘중 더 큰수 하나 구해서 0부터 그거까지for돌려서 점점 더 바꾸기 
//최소 공배수는 두수의 공통배수 그러면 애는 while돌리다가 1부터 곱했는데 둘이 동시에 같은거 있으먄 break
//원래는 이랬는데 너무 시간이 오래걸려 찾아보니까 최소공배수는 두 수의 곱을 최대공약수로 나눈 값과 같대