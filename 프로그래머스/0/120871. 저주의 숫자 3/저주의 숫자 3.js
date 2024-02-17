function solution(n) {
    var answer = 0;
    let num100 = Array.from(Array(200),( _ ,v) => v )
     num100 = num100.filter((element) => element % 3 !== 0 );
    num100 = num100.filter((element)=> !String(element).includes("3"))
    
    return num100[n-1];
}
//그러면 차라리 1부터 100까지 배열을 만들어서 값이 3으로 나눠지면 없애
//그리고 여기서 주어진 n의 인덱스를 찾아