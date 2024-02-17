function solution(arr1, arr2) {
    var answer = 0;
    if (!(arr1.length==arr2.length)){
       answer =  arr1.length>arr2.length? 1:-1;
    }else{
        let sum_a  = arr1.reduce((e,v)=> e+v,0);
        let sum_b = arr2.reduce((e,v)=> e+v,0);
       if(sum_a==sum_b) return 0
        answer =  sum_a>sum_b? 1: -1
    }
    
    return answer;
}