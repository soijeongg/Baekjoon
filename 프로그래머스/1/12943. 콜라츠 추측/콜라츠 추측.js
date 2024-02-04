function solution(num) {
    var answer = 0;
    var count=0;
      if(num==1){
        count=0;
    }
    while (num!=1){
        if(num%2==0){
            num=num/2;
            count++;
            }else{
                num=num*3+1;
                count++
            }
        }
    
  
    if(count>=500){
        count=-1
    }
    
    return count;
}
//짝수면 %2==0이면 2로 나누고 
//홀수면 %2==1이면 3을 곱하고 1을 더함
//그리고 count++1을해서 몇번 했는지를 찾자
//500이 넘으면 -1반환
