function solution(number) {
    let answer = 0;
    for(let i=0;i<number.length-2;i++){
        for(let j=i+1;j<number.length-1;j++){
            for(let k=j+1;k<number.length;k++){
                if(number[i]+number[j]+number[k]==0){
                    answer+=1;
                }
            }
        }
    }
    
    
    return answer;
}
//3명의 정수번호를 다뎌했을때 0이되면 삼총사 근데 처음부터가 아니라 하나씩 다해보고 삼총사인지
