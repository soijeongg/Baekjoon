function solution(intStrs, k, s, l) {
    var answer = [];
    for(let i of intStrs){
        answer.push(Number(i.slice(s,s+l)))
    }
    answer = answer.filter((e,v)=> e>k)
    return answer;
}
//intStrs와 정수 k,s,l
//각 원소마다 s번 인덱스에서 시작하는 길이 l짜리인 부분 문자열을 잘라내 정수로 변환 근데 이와중 k보다 큰거
//일단 포문 돌려서 잘라내고 넣고 필터 넣어서 k보다 작으면 없애기

