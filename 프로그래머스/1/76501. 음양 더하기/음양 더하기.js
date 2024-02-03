function solution(absolutes, signs) {
    var answer = 0;
    for(let i=0;i<absolutes.length;i++){
        if(signs[i]==true){
            absolutes[i]=absolutes[i];
        }else {
             absolutes[i]=-absolutes[i];
        }
    }
     for(let i=0;i<absolutes.length;i++){
        answer+=absolutes[i]
     }
    return answer;
    //absolutes이고sign이 부호 (T면 + F면 -)
}