function solution(s) {
    var answer = [];
    let count = [];
    s= s.split("")
   s=  s.forEach((e,v)=>{
        if (!count.includes(e)) {
            answer.push(-1);
        }else{
            answer.push(v-count.lastIndexOf(e))
        }
       count.push(e);
   })
    return answer;
}

//그러니까 중복된 글자가 없으면 -1을 제시하고 중복된 글자가 있으면 자신과 얼마나 떨어져 있는지 더 가까운애와의 차이를 구하여라
//이 문제에서 중요한거는 어떻게 하면 중복된 값을 계속 바꾸느냐