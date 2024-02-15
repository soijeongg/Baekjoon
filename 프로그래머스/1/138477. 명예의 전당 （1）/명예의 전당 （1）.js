function solution(k, score) {
    var answer = [];
    let topk = []
    for(let i of score){
            topk.push(i)
            topk.sort((a, b)=>  b-a )
            while(topk.length>k){
            topk.pop()
            }
         answer.push(topk[topk.length - 1])
         
        }
        
            
    
      return answer;
}


//매일 1명이 노래 부르고 문투점수가 상위 k이내일때만 해당 점수를 명예의 전당에 올림
//근데 초기에는 아무도 없으니까 출연자가 k보다 적을때는 다 들어감
//score가 들어오는 순서대로 들어감
//여기서 명예의 전당 마지막 점수를 가져와서 배열에 push 해라