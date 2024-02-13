function solution(n)
{
    var answer = 0;
    answer = String(n).split("")
    answer = answer.reduce((e,v)=> Number(e)+Number(v),0)

  

    return answer;
}