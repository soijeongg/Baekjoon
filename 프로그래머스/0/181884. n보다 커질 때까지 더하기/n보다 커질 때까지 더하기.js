function solution(numbers, n) {
    let sum =0
    for(let i=0;i<numbers.length;i++){
        if(sum<=n){
            sum+=numbers[i]
        }else{
            break
        }
    }
    return sum;
}