function solution(s1, s2) {
    var answer = 0;
    //같은 원소의 개수를 리턴한다 이중 for문
    for(let i=0 ;i<s1.length;i++){
        for(let j=0;j<s2.length;j++){
            if(s1[i]==s2[j]){
                answer+=1;
            };
        };
    };
    return answer;
}