function solution(hp) {
    var answer = 0;
    let jan =0;
    let ill=0;
    let a3 =0;
    if(hp>5){
        jan = Math.floor(hp/5);
        if(hp%5!==0){
            if(hp%5==4){
                ill=1;
                a3 =1;
            }else if(hp%5==3){
                ill=1;
            }else if(hp%5==2){
                a3=2;
            }else if(hp%5==1){
                a3=1;
            }
        }
    }else if(hp==5){
        jan=1;
    }else if(hp<5){
        jan=0;
        if(hp==4){
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