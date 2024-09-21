function solution(my_string) {
    var answer = [];
    let english = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    
     for (let i = 0; i < english.length; i++) {
        answer.push(0);
    }
    
    
    for(let i=0;i<english.length;i++) {
        for (let j=0;j<my_string.length;j++) {
           if( my_string[j] ==english[i]) {
                answer[i]++
           }
        }
    }
    return answer;
}

//알파벳 대소문자로 이루어진 문자열이 들어올때 A, B, c등 알파벳의 갯수 세기
//이거 동적 프로그래밍인가 