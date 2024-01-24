function solution(my_string) {
    var answer = 0;
    let num =[];
    //js에서도 정수인지 체크하는 ParseInt 아니면 Nan
    let my_string_list = Array.from(my_string,Number);
    for (let i=0;i<my_string_list.length;i++){
        if(!isNaN(my_string_list[i])){
            num.push(my_string_list[i]);
        }
    }
    for(let j=0;j<num.length;j++){
        answer+=num[j];
    }
    return answer;
}