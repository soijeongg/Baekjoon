function solution(arr)
{
    let oldnum =null
    var answer = [];
    arr.forEach((element)=>{
        if((element)!==oldnum){
            answer.push(element);
            oldnum =element;
        }
    })


    
    return answer;
}