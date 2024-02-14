function solution(nums) {
 
     let count = 0;
    let sum =[];
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            for(let k = j+1;k<nums.length;k++){
                let s = nums[i]+nums[j]+nums[k]
               
                    sum.push(s)
                
            }
        }
    }
    //이제 소수를 구하자 
   
    for (let i = 0; i < sum.length; i++) {
        let isPrime = true;
        if(sum[i] == 1){
            isPrime = false;
        }else{
        
            for (let j = 2; j <= Math.sqrt(sum[i]); j++) {
                if (sum[i] % j === 0) {
                    isPrime = false;
                    break;
                }
            }
      
      
 }
      if (isPrime) {
        count++;
        }}
    return count;
}
//주어진 숫자중 3개의 수를 더했을때 소수가 되는 경우의 개수를 구하려고 한다 
//그러면 for문을 3개를 돌려야 하나 그래서 나온 값을 다 넣자 그리고 이걸 인클루드에서 찾아 없는값만
//