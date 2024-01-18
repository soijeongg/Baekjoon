function solution(dot) {
    var answer = 0;
    //둘다 양수면 1, 배열[0]이 음수 배열[1]이 양수면 2, 배열[0]이 양수고 배열[1]이 음수면 4 둘다 음수면 3
    //배열 dot이 주어짐
    if(dot[0]>0){
        if(dot[1]>0){
            answer =1;
        }
        else if(dot[1]<0)
            answer =4;
        }
    else{
        if(dot[1]>0){
            answer =2;
        }
        else if(dot[1]<0){
            answer =3;
        }
    }
    
    return answer;
}