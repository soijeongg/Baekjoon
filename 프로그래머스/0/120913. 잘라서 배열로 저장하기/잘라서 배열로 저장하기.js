function solution(my_str, n) {
    var answer = [];
   // my_str = my_str.split("")
    //n씩 달라서 저장
    for(let i=0;i<my_str.length;i+=n){
        answer.push(my_str.slice(i,i+n))
    }
    
    return answer;
}