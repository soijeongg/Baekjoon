function solution(hp) {
    var answer = 0;
    let jan =0; //장군
    let ill=0; //일
    let a3 =0; //병정
    if(hp>5){    //5보다 클경우
        jan = Math.floor(hp/5); //일단5로 나눈다 그만큼 나감
        if(hp%5!==0){ //나머지가 있으면 이제 어차피 5보다 작으니 남은 애들 나가야 함
            if(hp%5==4){ //4면 일 1 병정 1
                ill=1;
                a3 =1;
            }else if(hp%5==3){ //3이면 병 1
                ill=1;
            }else if(hp%5==2){ //2면 일 1
                a3=2;
            }else if(hp%5==1){ //일 이면 일 1
                a3=1;
            }
        }
    }else if(hp==5){ //5면 그냥 애네만 나가면 됨
        jan=1;
    }else if(hp<5){
        jan=0;
        if(hp==4){ //이제 아까랑 같이 4면 3+1, 3면 3 2면 1+1
        a3=1;
        ill=1;
    }else if(hp==3){
            ill=1;
        }else if(hp==2){
            a3=2;
        }else if(hp==1){
            a3=1;
        }
    }
    answer = jan+ill +a3;
    return answer;
}