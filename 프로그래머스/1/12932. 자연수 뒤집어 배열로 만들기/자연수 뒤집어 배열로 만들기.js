function solution(n) {
   
    var answers = (n+"").split("");
    let ans = answers.reverse();
   ans =  ans.map((e,v)=> Number(e))
    return ans;
}