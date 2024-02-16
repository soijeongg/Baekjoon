function solution(s, skip, index) {
    var answer = '';
    let alphaA = "abcdefghijklmnopqrstuvwxyz".split("");
    for( let i of skip){
        if (alphaA.includes(i)){
           alphaA.splice(alphaA.indexOf(i),1) }
    }
    for(let i=0;i<s.length;i++){
        answer+=alphaA[(alphaA.indexOf(s[i])+index)%alphaA.length]
    }
    
    return answer;
}

//알파벳을 index만큼 미는데 skip에 있는걸 없애고 밈
//애초에 소문자배열을 만들고 for문을 돌려 있으면 splice 하기
//이제 제거 했고 하나씩 빼와서 있으면 인덱스오브+index
