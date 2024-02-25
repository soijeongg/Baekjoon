function solution(my_string, m, c) {
    var answer = '';
    let result =[]
    for(let i=0;i<my_string.length;i+=m){
        result.push(my_string.slice(i,i+m))
    }
    for(let j=0;j<result.length;j++){
        answer+=result[j][c-1]
    }
    return answer;
}
/* 그럼 m의 개수대로 나눠서 저장했다가 c번째인거를 빼내면 되겠다 */