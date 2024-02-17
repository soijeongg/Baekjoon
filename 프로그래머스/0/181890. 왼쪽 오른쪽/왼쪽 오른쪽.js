function solution(str_list) {
    var answer = [];
    if(!str_list.includes("l") &&!str_list.includes("r") ) return []
     if (str_list.indexOf("l") !== -1 && str_list.indexOf("r") !== -1) {
    if(str_list.indexOf("l")<str_list.indexOf("r")){
        answer.push(str_list.slice(0,str_list.indexOf("l")).join(""))
    }else{
         answer.push(str_list.slice(str_list.indexOf("r")+1).join(""))
    }}
    if (str_list.indexOf("l") !== -1 && str_list.indexOf("r") == -1) {
        answer.push(str_list.slice(0,str_list.indexOf("l")).join(""))
    }else if(str_list.indexOf("l") == -1 && str_list.indexOf("r") !== -1){
        answer.push(str_list.slice(str_list.indexOf("r")+1).join(""))
    }
    
    return answer.join("").split("");
}
// "u", "d", "l", "r" 이 여러개 저장이 되어 있다 
// l이 먼저 나온다면 해당 문자열을 기준으로 왼쪽
//r이 먼저 나온다면 오른쪽 문자열
