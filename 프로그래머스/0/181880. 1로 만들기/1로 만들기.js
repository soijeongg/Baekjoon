function solution(num_list) {
    var answer = 0;
    for(let i of num_list){
        while(i!==1){
            if(i%2===0){
                i=i/2
                
            }else{
                i = (i-1)/2
              
            }
            answer++
        }
    }
    return answer;
}

//짝수라면 반으로 나누고 홀수라면 -1/2 1이 될때ㄲ지