function solution(n) {
    var answer = 0;
    let n_list =[n];
    let s=  Array.from(String(n), Number);
    for(i=0;i<s.length;i++){
        answer+=s[i];
    }

    return answer;
}