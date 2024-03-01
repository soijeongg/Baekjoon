function solution(arr, n) {
    //홀수라면
    if(arr.length%2){
        for(let i =0;i<arr.length;i++){
            if(i%2==0){
                arr[i] = arr[i]+n
            }else{
                arr[i] = arr[i]
            }
        }
    }else{
       for(let i =0;i<arr.length;i++){
            if(i%2==1){
                arr[i] = arr[i]+n
            }else{
                arr[i] = arr[i]
            }
    }
    }
    return arr;
}
//arr과 정수 n이 매개변수로 주어짐 길이가 홀수하면 모든짝수인덱스의치에 n 더하기
//짝수라면 모든 홀수 인덱스 위치에 n을 더함
