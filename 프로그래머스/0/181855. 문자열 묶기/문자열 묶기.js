function solution(strArr) {
    var answer = {};
   let count=0
       for(let i of strArr){
             if (!answer[i.length]) {
                answer[ i.length] =1
           }else{
                answer[ i.length] +=1
           }}
    let maxKey = Object.keys(answer).reduce((a, b) => answer[a] > answer[b] ? a : b);
    for(let i of strArr){
if (i.length==maxKey){
    count++
}}
    return count;
}