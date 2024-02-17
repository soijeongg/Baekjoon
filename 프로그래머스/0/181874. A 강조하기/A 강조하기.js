function solution(myString) {
    var answer = myString.toLowerCase();
    let si =""
    for(let i=0;i<answer.length;i++){
     si+= answer[i]=="a"?"A":answer[i]}
    
    return si;
}
//그냥 전체 toLowerCase하고 a찾으먄 대문자로 