function solution(s){
    var answer = true;
    let c_s =0;
    let c_y =0;

    // 대문자와 소문자가 섞여있는 문자열 s 
    // p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solutio
    // 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
    for(let i=0;s.length>i;i++){
      if(  s[i] == "Y" || s[i] == "y"){
          c_s+=1
      }else if (s[i] == "P" || s[i] == "p"){
          c_y+=1
      }
    }
    if(c_y==c_s){
        answer = true
    }else {
        answer = false
    }
    

    return answer;
}