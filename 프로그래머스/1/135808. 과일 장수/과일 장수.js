function solution(k, m, score) {
    var answer = 0;
    let count = []
    score = score.sort((a,b)=>b-a)
    for(let i=0;i<score.length;i+=m){
       count.push(score.slice(i,i+m))}
      
    //이중에 길이가 3인거만 찾고 
  count = count.filter((e) => e.length == m);
    //이제 for문을 돌면서 제일 작은 값 찾아서 k와 곱한값 answer+=
    for(let i =0;i<count.length;i++){
       answer+= Math.min(...count[i])*m
    }
    
   
    return answer
}

//그러니까 사과가 있는데 최하점이 1점이고 최상점이 k점이다 
//사과박스의 가격은 최하점*m이다 m은 한상자에 담길 수 있는 갯수이다 
//근데 사과박스 가격을 최대로 만들어야 한다 
//(그럼 먼저 slice해서 복사한 다음 sort해서 가장 작은거 m개만 )
//아니면 sort해서 작은거 몰아놓고 그렇게 해보자