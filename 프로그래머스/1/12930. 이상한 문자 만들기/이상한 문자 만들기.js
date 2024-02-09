function solution(s) {
    var answer = s.split(" ");
    let ss=""
    for(let i=0;i<answer.length;i++){
        for(let j=0;j<answer[i].length;j++){
           ss+= j%2==0?answer[i][j].toUpperCase():answer[i][j].toLowerCase();
            
        }
        //현재 split으로 나눈 값의 인덱스가 길이-1 맨 마지막보다 작으면 "" 추가
        if(i<answer.length-1){
                ss+=" "
            }
    }
    
    
    return ss;
}