function solution(num_list) {
    var answer = 0
        if(num_list.length>=11){
           answer =  num_list.reduce((e,v)=> e+v,0)
        }else{
           answer =  num_list.reduce((e,v)=> e*v)
        }
    return answer;
}