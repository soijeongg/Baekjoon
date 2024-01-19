function solution(my_string) {
    var answer = [];
    let str_li = Array.from(my_string,Number);
    for (let i=0;i<str_li.length;i++){
        if(!isNaN(parseInt(str_li[i] ))){
            answer.push(str_li[i]);
        }
    }
    answer.sort(function(a, b)  {
  return a - b;
});
    return answer;
}