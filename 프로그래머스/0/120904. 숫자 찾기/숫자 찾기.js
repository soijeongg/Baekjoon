function solution(num, k) {
    num = num.toString().split("");
    for(let i=0; i<num.length;i++) {
        if(num[i]==k.toString()) {
            return i+1
        }
        }
    return -1
    }


//정수 num과 k가 매개변수로 주어질때 num을 이루는 숫자 안에 k가 있으면 몇번째로 있는지  없으면 -1