function solution(strArr) {
    var answer = [];
    let length = strArr.length
    for(let i=0;i<length;i++){
            if(!strArr[i].includes("ad")){
            answer.push(strArr[i])
            } 
    }
    return answer;
}
/* 문자열 strArr가 주어짐 이 중 ab가 있으면 지우기 */