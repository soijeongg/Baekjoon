function solution(numbers) {
    var answer = -1;
    let num10 = Array.from (Array(10),(_, index) => index);
    //이제 비교하자
    let sumdigit = num10.filter((x)=>!numbers.includes(x));
    sumdigit = sumdigit.reduce((e,v)=>e+v,0);
    return sumdigit;
    //num10에 없는 숫자를 모두 찾아 더해 return 함
    
}