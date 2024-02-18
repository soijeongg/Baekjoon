function solution(a, d, included) {
    let b = []
    var answer = 0;
   while(b.length!==included.length){
       b.push(a)
       a=a+d
   }
    for(let i=0;i<b.length;i++){
            if(included[i]){
                answer+=b[i]
            }
               }
    
    return answer;
}
//두정수 a,d 그리고 블린 배열 include[i]가 i+1
//등차수열이 뭐야?? 첫째 항이 3부터 시작 공차가 d d만큼 큰데 길이는 includ
//그럼 