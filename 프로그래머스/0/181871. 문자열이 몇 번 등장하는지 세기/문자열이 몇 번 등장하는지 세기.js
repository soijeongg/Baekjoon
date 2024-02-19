function solution(myString, pat) {
    var answer = 0;
    let ans = []
  
    for(let i=0;i<myString.length;i++){
          ans.push(myString.slice(i,i+pat.length))  }
    for(let i of ans){
        if(i==pat){
            answer++
        }
    }
    return answer;
}

//이걸 접미사 만들기 처럼 다세가지고 카운트 하자 