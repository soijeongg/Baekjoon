function solution(order) {
    var answer = 0;
    order = order.toString(); 
    let game = ['3','6','9']
    for(let i=0;i<order.length;i++){
        if(game.includes(order[i])){
           answer++
           }}
    return answer;
}