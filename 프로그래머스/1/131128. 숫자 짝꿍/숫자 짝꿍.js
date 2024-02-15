function solution(X, Y) {
    let X_counts = {};
    let Y_counts = {};
    for (let i = 0; i <= 9; i++) {
        X_counts[i.toString()] = 0;
        Y_counts[i.toString()] = 0;
    }

 for (let i = 0; i <= 9; i++) {
    for(let j=0;j<X.length;j++){
          if (parseInt(X[j]) === i) {
            X_counts[i.toString()]++;
        }
    }
    }
    

   for (let i = 0; i <= 9; i++) {
        for(let j=0;j<Y.length;j++){
          if (Y[j] === i.toString()) {
            Y_counts[i.toString()]++;
        }
    }
    }
let result = "";

     for (let i = 0; i <= 9; i++) {
     let common = Math.min(X_counts[i.toString()], Y_counts[i.toString()]);
        result+=i.toString().repeat(common);
    }
    // 공통으로 나타나는 수가 없으면 -1 반환
    if(result.length==0) {
        return "-1"
    }else if(result.split("").every(element => element == "0" || element == "")) {
         return "0";}
    
    result = result.split("").sort((a,b)=> b-a).join("")

    // 문자열을 내림차순으로 정렬하여 가장 큰 수로 만듦
    return result
}

//두정수 x,y의 임의의 자리에서 공통으로 나타나는 정수들을 이용하여 만들 수 있는 가장 큰 정수
//두 수의 짝꿍 존재하지 않으면 -1
//그러니까 둘이 split 했을때 공통적인 숫자를 가지고 가장 큰 수를 앞에 붙이고 그다음 수를 뒤로
//그럼 공통된 수를 찾아서 저장하기 
//#을 사용하면 private