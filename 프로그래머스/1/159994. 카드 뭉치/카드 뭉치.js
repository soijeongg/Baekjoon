function solution(cards1, cards2, goal) {
    var answer = '';
    while(goal.length>0){
        
           if(cards1[0] == goal[0]){
               cards1.shift()
               goal.shift()
           }else if(cards2[0] == goal[0]){
                cards2.shift()
               goal.shift()
           }else {
            break;
           }
    }
      answer = goal.length == 0 ? 'Yes' : 'No';
    
    return answer;
}