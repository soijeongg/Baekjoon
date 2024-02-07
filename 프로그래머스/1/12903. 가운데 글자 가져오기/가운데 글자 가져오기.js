function solution(s) {
    var answer = s.length%2==0?s.slice(Math.floor(s.length/2)-1,Math.floor(s.length/2)+1):s.slice(Math.floor(s.length/2),Math.floor(s.length/2)+1)
    return answer;
    //가운데 글자 가져오기 단어가 짝수라면 가운데 두글자만 반환하면 됨
    //나 이거 삼항으로 풀고 싶어
}