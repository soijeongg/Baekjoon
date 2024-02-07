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

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    
    return answer;
}